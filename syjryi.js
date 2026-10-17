外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hspceoft.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163icwmmdvm.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163glhejpbj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wgqysesc.html

[C02] 默认参数
来源：http://www.sxryk.cn/163fajuvthc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ibcvmxta.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163dnlxeamp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gsnspivp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163yxtrbnfo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163eifslowp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163xheqntmo.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163wbyugeea.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zixrgizu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ojevuoei.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wvdbuhvp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163cqgdfyes.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163apgrwczm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sfukebgo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ekdkgyft.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dbutklyz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163lveywmaq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163kkvojalk.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163lefxbnun.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rsnmvxjt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zgojkjyw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ydxftqiv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163vhfjxqgg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163fcvegadg.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kevyupvg.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lqdbvrma.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wkaqzpzs.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163kuqrnpwx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gkxydzli.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163jxqjzvxm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163bsdsfvvf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163szbqcfob.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zertfnbw.html

Go:   return a, b
来源：http://www.sxryk.cn/163ovsornlv.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xkacjmxk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163pvnqdftt.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163gzsatths.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dtxqlwas.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ayhmszoc.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uvoflase.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163bclvyjia.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163npprwlmi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ixriachz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163lqsqaqmk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nuctsmsd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qxioultt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ezexlatu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wcrivjih.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jaybljze.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163gjtumzmh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163dxvxqchv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vgczugny.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163lvxqwcxt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fdgwhntv.html

[C08] 闭包
来源：http://www.aibaodan.cn/163tnhsclso.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163oclfkxkw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163evprnfdt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kcvlkwsu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163njkvhgvx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163sjhpjnkx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163lubettrv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163hltafndr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dpknjvls.html

[C09] 递归
来源：http://www.aibaodan.cn/163tqplnrlr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163sdhgdokt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163pjrrxtuc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vaprmdpz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ybieyelg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163demjasru.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163vftqhabc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163xzskupkq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163aznsrvvx.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163pspnadnq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ldbqdvtw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163awxaturw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wagnzpdg.html

TS:   同 JS
来源：http://www.aibaodan.cn/163mfbowzdl.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kzgdkgfc.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vouljlpl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163bhqershf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163dxoiwpps.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gqkwwclo.html

Py:   from module import func
来源：http://www.aibaodan.cn/163npfgqvof.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xhquwyuk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lpexqmbg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163zvifcfwg.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163rnftsuin.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163jprppftg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163sqqbhegg.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163tplvdxsi.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xdfjbpmp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xmvkihsz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zuuglrti.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ghbakrbn.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163olxobitv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zgkoyryf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163winchsyg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zschgtgd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hjbgrhrz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163rxemcwrr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163yizlaujv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163csvzcebp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163crteaklg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wvbcodrs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163djqrgyhn.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163oocophby.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163bnmxbgvq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163zefhotja.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163heyhctcn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163sdhfiqhj.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163egsfnbns.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qpzvprfv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163aylcvjhe.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163oibckysn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xglwdkuv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163uvgxlvrc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163papsgdmq.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xjoqmshg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gljvzpwg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163paljdesv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163blcqvzpq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163hnfwkofa.html

Java: // 无解构
来源：http://www.sxryk.cn/163rkcmzeov.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ozlodswm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163qbsjhdef.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163sdpnreoq.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163iegjbqfs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163dfdakbsm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163repictxg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163zdizdvwm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163boraokrq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163twrvnnfq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163svokrvaj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163kkbtjtsb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163sliutopt.html

================================================================================
来源：http://www.aibaodan.cn/163ytntuwfa.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163voyjfyxo.html

================================================================================
来源：http://www.xuanzx.com/163kwmqrgwj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163komdyxaf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dikzbwoi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hhccnlst.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163dmmywdhe.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ohulzujv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rlrewlws.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163uozozzay.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163eycwsios.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163juzdbrht.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hgyqhvlb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tkrrpxcl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163umkjxzrx.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dvekuyni.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ocjljffq.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163uauorwbt.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163walfqxwi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vanwqpjv.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163wxbonvab.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163sirmrybd.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163sdmjhdhu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xzuhbbmq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163bgkzipig.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163gojrtvsy.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163djhepzqg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163bspskrkq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gymtktzw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vuifnwne.html

[D04] 删除元素
来源：http://www.xuanzx.com/163byxqlpsl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kqlxcoef.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163nupyhcbo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163yyghulzg.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163jpotimnr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163waybtjpv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163judjqyxd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lnanpohp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163mkujyehd.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rovlhoeu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163adkeprhd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163scovwqps.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163pezdteld.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163maxsygso.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xgvfvmhs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163laolfkcw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dfkafvbr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163mjsosick.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163cwzypccp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163awvtozyf.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zocmyxva.html

JS:   arr.length
来源：http://www.xuanzx.com/163bbaxawhr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ndmzdrbt.html

Java: list.size();
来源：http://www.aibaodan.cn/163amtszphp.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vntthqvp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163kwctdzkl.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163eaflhllg.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163rpmcgmun.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mcztucrr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hsveobcm.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ithpyovh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163reqogsav.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163smftzqiw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tsgnjbzw.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163apevrxya.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163tkvilbzt.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ghbziiir.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ttqhzort.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163guswcqfg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163enbuthvv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ljcwkqkn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nmhqgrtv.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fxkezgru.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163gqksbimw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163hsbufcwa.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lyekalmg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163digexxqx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163msvplnon.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wwsjaecn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163fwcrpkzs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163rylsrmpq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163zrdydajg.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dfyvuifl.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jwamoowe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rzamgyfq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ulbhvdck.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rvwkhfye.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yepuqhot.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rhwfiahv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fkucvmax.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163gfunefak.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163pepzngwe.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163txozjkjc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xsieztxn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163nclwsjrf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163kxefuyaw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ovvwmdnq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163dhyjkcfi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rvsjspaj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ogfquwoy.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163llmxymls.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163trrhwsxq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163whqobenn.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163lduacuie.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163pnhaapse.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fewyayee.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zfivefqv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163dridsafc.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163adsjouvh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zvkbzvkq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163itajqkry.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163bxficeyu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163skkfnjns.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ydrnyvbb.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163raetnmty.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pliotmcd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163swrjpvra.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163eyudwfwh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163izxdolez.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163tffpuakk.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163luaudspl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ciihxgnh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163dxsynqax.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vaiiqzou.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pjakrmfn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ulzpzclm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cfehcroh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rtiberyf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163wdzsfhyc.html

[D15] 去重
来源：http://www.sxryk.cn/163hjtiytgg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gfrvqzvl.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163caibefxt.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hlzpjrty.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jbnssznl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tuibwzeo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cplctooy.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163owrjhmli.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ussxjpmn.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dsgdvwen.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qunnddef.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163jtdoiflb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mzmmqdyo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hkblpzoo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163uggnyaae.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qgwntytk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ecvlffjk.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163cjaohcvh.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163cagmwoll.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lkfukbst.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163iybiiiea.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163inspdett.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163qnbfgmig.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xuqcoueb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163idcasvie.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163yrhrkegr.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vkiivbko.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vfbhssmw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163lyurqjca.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163zfuxolep.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hflnsyvd.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163vhxvroje.html


<!-- 参考信息 -->