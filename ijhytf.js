外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qfilalrv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163njudfbon.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163hcohjrjt.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jpbcidrr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bnbfqjnu.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163cbmaniie.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163qjlwfoul.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163haqiryyu.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163qbcjiode.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163pdnvbgae.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163cwosnndg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163qwbquozq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163tfmpisyg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163sffvvmbc.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lcvewiwj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163gfrknlod.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gfwmlpab.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163sgdybcrv.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163bpzqwlak.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163yhijuaeq.html

================================================================================
来源：http://www.xuanzx.com/163yemfqzwt.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rwjqanpv.html

================================================================================
来源：http://www.sxryk.cn/163pibmrgak.html

[C01] 定义函数
来源：http://www.xuanzx.com/163yshhsnhw.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163mhaawfvv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vnixubbr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163uxersfji.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jtpewpms.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163inruzjbv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163itgdcvaj.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ebvnuayw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qglbubsj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ninxrlfw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163vgrlzktp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163jedaoirf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cdcajyuu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163hkspfruq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163nxyzptal.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163kyxvxzzs.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163kjkvaemq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xbqtuskq.html

[C03] 可变参数
来源：http://www.sxryk.cn/163krnvvlib.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vivpaipv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ynhytyho.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163okivjgls.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zhppdmyj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pcntbovs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163vtqvbpkv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163fdclxjhh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ufltgpgx.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163jeheohbc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ommukqux.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163htmjquyu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163klipjmvf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163yivttncn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163iiiwgfld.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163eaxzfnrj.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xlawbrgq.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163umfjfdbz.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ovoctzlh.html

Py:   return a, b
来源：http://www.sxryk.cn/163xeyvwkkz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163isnshcvd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163uouwmilf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163mffznuqu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nknwabga.html

Go:   return a, b
来源：http://www.xuanzx.com/163xexoiqpw.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fxyquieq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163vwxxsojl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163qljtdyob.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163lqavyvej.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163rfptlxnv.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163msfknrym.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163lsxkbdte.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xwhsrxof.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163gebyzypf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163uyqfwkop.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kxxdilyw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vmxaunfr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qyughtxl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zlkajifw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ngmzdmcc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163tltexxei.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ylefqpfa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163srwjzynk.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kstwkaid.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mwbouoqg.html

[C08] 闭包
来源：http://www.aibaodan.cn/163pdugtxvg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fkgxcvvf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163fsnhtzym.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zoqjdwtc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fosjlfsd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163youflbkv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fonvqvws.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jbgtgrqg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pusdqgvw.html

[C09] 递归
来源：http://www.aibaodan.cn/163vmlgjbom.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163guphphoo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163itzqveni.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tkakibek.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gbszwivr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xvpmsmgk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163nuwexifl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163sxfuwxqf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163cplnjddf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163izaokttu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163lcyacwdk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163okebreen.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163mrybaonj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163rzttknch.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163hmflxvji.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163phhncywl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163alqemzts.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fnktvuib.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163pdwlcpeg.html

Py:   from module import func
来源：http://www.xuanzx.com/163hculcood.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163uparcuvk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163awrclxvz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163crfcyayv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ggemtikx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163effurgik.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dmbslrjr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rrypivys.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163mfauouwh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cewgcaqj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hrsafmvv.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vysmhpjm.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cvcfaomr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wfqmzwlr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xkscysmy.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163igapewfo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163caxprjmq.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zsdtyeuf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xmbwklqo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lxdadvmo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lgudrbop.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163asfzxulj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ehxtwdjp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163qrsxrcdt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163krbrxkns.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vlfhbnpe.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163xvybudww.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pkmvfmib.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163wbszzwdv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163xsphgwqz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163laeckqoa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163utfvypqg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xvvhukzs.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163tngkvlki.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163tnghnyqs.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rmnfecas.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163exlwfstd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ubqxvemb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163qwxqayof.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163lngwpdze.html

Java: // 无解构
来源：http://www.xuanzx.com/163ttfjdjph.html

Go:   // 无解构
来源：http://www.sxryk.cn/163rrqnuxac.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163fsypemvt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163tftjxvqc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163edvlqczi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163anywsccb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163cbnmnknn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163eqeoraaq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163amdxeaii.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163pmrbwtek.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kltboqiz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163msiszgjn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163zfcycaco.html

================================================================================
来源：http://www.xuanzx.com/163fiquadjy.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xmiytlwm.html

================================================================================
来源：http://www.xuanzx.com/163xnmealeu.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ilyzyook.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163nizkhjkr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rdirbfby.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vqfvjmhh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163dbkstvsm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163tgnpbykw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163atovhcox.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kzjchbja.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xubztafh.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ngjhhgmh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163unuofgaz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ailxmkhy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163yncqshpk.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ayevuvst.html

Java: list.add(4);
来源：http://www.sxryk.cn/163daslmlzo.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163mnamihig.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163iadvevjp.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163tjdzythc.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163euvjybwr.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163cqsfddwy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163skyszcqu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rvxhdfnv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zxwpdgsl.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tbgpzpzq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163mtpjbwfh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163zxilfepr.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163sjmadjzl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hcpewkxo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ccclmlvu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xpreokuu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lovkrkmd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mqtvlsqu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163zjghoqfs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kxaxjbgd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163nwscpmfv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163cbjfxgdf.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xvgmjben.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lhfickmy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wybeznae.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163apxlfsip.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163twvjlmbu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163rrzugkos.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hlaekpzb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vlkrwtmm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ohcstxgh.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163pqgopbat.html

Py:   len(arr)
来源：http://www.sxryk.cn/163idsavmae.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ufgtdoko.html

JS:   arr.length
来源：http://www.xuanzx.com/163xihzcewj.html

TS:   arr.length
来源：http://www.sxryk.cn/163skepzbng.html

Java: list.size();
来源：http://www.sxryk.cn/163zmqwpqab.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xariapjp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vibdkshy.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ghyipkjh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163rwwgczeb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163sahfcamq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ehnstzet.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ovebxsbe.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163sxbdcuas.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163etiyuacx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163upvehbus.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163yrubafkm.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163yqtxzsej.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qixhamtz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163lnlcjyqk.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163pezkrywy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163htosvzwl.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dsadijny.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163qcemdrfx.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163yrvkslsn.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163gwhqqoyr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163coauyoci.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163eesqjqra.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xrfxdiac.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163dpsvuqcl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zwqjraus.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rfvwcqzo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163tfpycmrp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qbfpsvge.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vkfmgvzz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163rowpycfd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163izlybvdv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163eihzrhbl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163slnkkqej.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163apibtamh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nrqijtsw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163dozmvxgf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gkqseyyg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163oarybwxn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163yaszhuwl.html

[D11] 反转数组
来源：http://www.sxryk.cn/163sraklism.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163wiuaygzp.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ldwaukfo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ligkhcar.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163jjeihayf.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163auujhmdh.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163dqzrxkpu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ansmdbbw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163sflbnupk.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163zyexexwe.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163hbmuenjx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163myjrtitm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163yprurxoc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163brvspqpz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uhmykjcs.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ehduxkvr.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163hshligmh.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163mbpvuugu.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163dgiardwu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163bvphdmdr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163wwnduhnj.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163axucokyp.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rsuvgzss.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163rwjmypjf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163avzljlbu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163krvewynj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qgcjszly.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163vokhsard.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zlqsxais.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163prvcuyvi.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163beknzckf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163layhizep.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kgvpnlby.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fqchwjdp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163boiibqim.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vfpciukq.html

[D15] 去重
来源：http://www.sxryk.cn/163hoomrfju.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uznaqrog.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163fwscojhz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hglmnpos.html


<!-- 参考信息 -->