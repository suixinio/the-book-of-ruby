---

	{
		"title": "序言",
		"ctime": "2016-11-03 20:30:00",
		"mtime": "2016-11-03 20:30:00"
	}

---

# 序言

***

## Ruby 入门

正因为你现在在阅读一本关于 Ruby 的书，我认为你不需要我去利用 Ruby 语言的优点说服你接受它这个假设是完全成立的。所以，我将采取特别的方式开始，需要注意的是：许多人被 Ruby 吸引是因为其简单的语法和易用性。然而，他们错了。Ruby 的语法一眼看去很简单，但是当你对它了解得越来越多时你会意识到，相反地，它是非常复杂的。事实就是，对于不熟悉 Ruby 的程序员来说却有很多陷阱。

在这本书中，我的目标是引导你摆脱这些陷阱，带领你穿越 Ruby 的语法和类库的浪潮。在探索的过程中会经历平坦的高速路以及有些曲折颠簸的小路。在旅途结束时，你应该能够安全、有效的使用 Ruby 了，而不会被沿途的任何意外所绊倒。

本书中使用的 Ruby 版本主要集中于 1.8.x 版本。虽然 Ruby 的 1.9 版本可能已经发布了，但 1.8 版本的 Ruby 仍然远远没有被广泛的使用。Ruby 的 1.9 版本可能被视为 2.0 版本的铺垫。大多数人同意 Ruby 1.9 版本的语法接近 1.8 版本，但你应该注意其中的一些差异，完全兼容是不可能的。

> 译注：目前（2016年11月）Ruby 的版本已经更新到 2.4（开发版），而稳定版为 2.3.x 。

### 如何阅读本书

这本书被分成了多个小部分。每一章都会介绍一个主题，而此又细分为多个子话题。并且，每个编程主题中都会伴随一个或多个彼此独立，直接就能运行的 Ruby 程序。

如果你想跟随一个结构良好的教程学习，那就按顺序阅读每个章节。如果你更喜欢学习到实用的方法，你也可以先运行程序，在你需要解释说明的时候再去参考文本。当然，如果你已经有了一些 Ruby 的实践经验，你可以按任意的顺序选择你觉得对你有用的章节进行阅读。在本书中没有大篇幅的相关联的应用程序代码或主题讨论，所以你不必担心由于没有按顺序阅读而导致你错过了一些重点。

### 深入探索

除了第一章，每一章都有一个部分叫做“深入探索”。在这部分我们将更深入地探索 Ruby 更具体的某些方面（包括一些我刚才提到的可能历经的曲折）。在大多数情况下，你可以直接跳过深入探索这部分，继续学习你今后必须要用到的知识。另一方面来说的话，在深入探索这一部分我们经常会接触到关于 Ruby 内部运作机制的知识，所以，如果你跳过这部分可能会错过一些非常有趣的东西。

### 文本格式约定

在这本书中，任何 Ruby 源代码都是像下面这样写的：

	def saysomething
  	  puts("Hello")
	end

当有一个示例程序伴随代码时，程序名将显示在页面右侧的一个框中，像这样：

<div class="code-file clearfix"><span>helloname.rb</span></div>

说明注释（通常是为在文本中提到的一些要点提供一些提示或给予一个更深入的解释）显示在这样一个方框中：

<div class="note">
	<b>这是一个解释性说明。</b>如果你想的话可以跳过它，不过你这么做的话，可能会错过一些有趣的东西。
</div>

### 什么是 Ruby ？

Ruby 是一种跨平台解释型语言，它具有许多与其他“脚本”语言（如 Perl 和 Python ）相同的特性。第一眼看上去它具有类似 Pascal 风格的英语语法。它是完全面向对象（object oriented）的，并且与著名的纯 OO 语言的鼻祖 Smalltalk 语言有很多共同点。据说，对 Ruby 语言的开发具有影响力的语言有：Perl、Smalltalk、Eiffel、Ada 和 Lisp。Ruby 语言是由 Yukihiro Matsumoto （通常称为 “Matz”，译注：日籍，中文译名为松本行弘）开发创造的，并于 1995 年首次发布。

### 什么是 Rails ？

目前，围绕 Ruby 最高的热度可以归功于一个 Web 开发框架，Rails —— 通常称为 “Ruby On Rails” 。Rails  是一个令人印象深刻的框架，但它并不代表 Ruby 的全部。事实上，你在没有首先精通 Ruby 的情况下直接去接触 Rails 开发框架，你可能会发现你最终创建的应用程序（applications），连你自己都不能理解（实际上，这在 Ruby On Rails 新手中太常见了）。学习 Ruby 是理解 Rails 的必要前提条件。

### 下载 Ruby

你可以在 http://www.ruby-lang.org 下载最新版本的 Ruby 。确保你下载了二进制文件（不仅仅是源代码）。在 PC 上，你可以使用 Ruby Installer for Windows 安装 Ruby ：http://rubyinstaller.rubyforge.org/wiki/wiki.pl 。

或者，如果你使用的是 Ruby In Steel IDE，你可以使用网站的下载页面上提供的 Ruby In Steel “一体化安装程序”安装 Ruby，Rails，Ruby In Steel 和所有其他需要使用的工具：http://www.sapphiresteel.com/ 。

### 获取示例程序源码

本书每章中的所有程序都可以从 http://www.sapphiresteel.com/The-Book-Of-Ruby 下载 Zip 文件获取。当你解压缩这些程序包之后，你会发现它们是被按章节分到一组目录中的。使用 Ruby In Steel （由本书作者的公司开发的 Visual Studio IDE）的好处就是，你可以将在一个项目树分支中的每个章节的源程序作为一个 Visual Studio solutions 全部加载到  Ruby In Steel For Visual Studio 2008 中。如果你正在使用其它编辑器或者 IDE ，你需要一个一个的加载每个 Ruby 程序。使用 Ruby In Steel for Visual Studio 2005 的用户可以（通过 <em>文件 新建/打开</em> 菜单）导入或者转换该项目。


### 运行 Ruby 程序

经常在包含有你的 Ruby 程序的源目录中打开一个命令行窗口是非常有用的。假设 Ruby 解释器（interpreter）在你的系统中路径是正确的，你就可以通过（在命令行）输入 **ruby &lt;filename&gt;** 来运行你的程序：

	ruby 1helloworld.rb

如果你使用的是 Ruby In Steel ，你可以在交互式控制台通过按 <kbd>CTRL+F5</kbd> 运行你的程序，或者按 <kbd>F5</kbd> 调试程序。

### Ruby 的库文档

这本书涵盖了标准 Ruby 库（Standard Ruby Library）中的许多类和方法，但并不是全部。因此，在某些时候你需要参考 Ruby 所使用的所有类的文档。幸运的是，Ruby 类库包含有被提取编译为易于浏览的多种合适格式的嵌入式文档。例如，请参考被放在 Web 网站上的在线文档：http://www.ruby-doc.org/core/ 。

或者，你也可以按字母顺序浏览：http://www.ruby-doc.org/stdlib/ 。

上面这些页面都包含有如何下载离线文档的说明。还有一个页面，你可以从其中下载多种格式、版本和语言的文档：http://www.ruby-doc.org/downloads 。

OK，这些序言已经足够了，让我们开始吧。是时候直接去阅读第一章了。

***

<p class="text-center">
	<b>《The Book Of Ruby》由 SapphireSteel 软件赞助，并提供开发了 Ruby In Steel IDE for Visual Studio 。</b><br />
	<a href="http://www.sapphiresteel.com">http://www.sapphiresteel.com</a>
</p>