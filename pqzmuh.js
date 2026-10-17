外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xiyffpbk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163yxokxctm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163gpisfdfq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ldwsgcnj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163rulsthtd.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163rgizdyvs.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163skuvapgy.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163kazrisbi.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ejcnprpw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163upznpuxe.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hlrvdswi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163cdkrpumh.html

Py:   if not data: return
来源：http://www.sxryk.cn/163bjxpyrsg.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163nuxbyyef.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163hvmdzfsm.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163eqbruxqa.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163rceuhini.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ozxecqjh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sqvkrmgw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ssrvwinl.html

================================================================================
来源：http://www.aibaodan.cn/163ekcyfeyp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qymdtwbe.html

================================================================================
来源：http://www.sxryk.cn/163vorfehfu.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ikubhyqb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mnrrpold.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cnxackyk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163robncffz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jimrzdrd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dayzzwsv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ceuianre.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rvaxxukk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gbuhwhlz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163htpubhwj.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163fsgrcouz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163aqycskyc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163mhivxkij.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163spijgxsm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ovdodqxw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mhtmondi.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163gpagbpbi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163jsfbkhjn.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vtytdxbp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ulhkpvgw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163audvugel.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hcdzvdke.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kkcfuseh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163yisdpgwu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163mzoiwgiq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zrplyjqs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163zazdjeoy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163pevyrkau.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fbmrofml.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ogtfnlgy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nbpvxogm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163uoonoolv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163nkzdwtzz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163hufhqugv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xeqnggws.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sisywklg.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zqurfito.html

Py:   return a, b
来源：http://www.sxryk.cn/163fqouukqz.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qqhtghpt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kbrudyob.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163xvnoowog.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mzktjcfa.html

Go:   return a, b
来源：http://www.xuanzx.com/163zpfdzwsh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163zgtompyx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lvwzbpkq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ecmnsbwm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163lewcbhjp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163iwazjupy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163wbptskpt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163klwbyxrx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jozmawmg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ljlvovcw.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ulpndmcn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163btmlsxol.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163fracfuyt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163auddtqvv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ocedynjg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163dqrotpzp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163wmbzfmee.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163qdcpomlb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163knkrrgtn.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tvuddwwr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163dwgxmjgj.html

[C08] 闭包
来源：http://www.sxryk.cn/163yivdhovx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163blmjuari.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kzklzkct.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dfepvbkz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163snyqqhnv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163xmelbknp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ifarhwdh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163cwhuyxza.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163svoheomt.html

[C09] 递归
来源：http://www.xuanzx.com/163ntsnsvqv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mwlvxdjf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dflqjgvo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xqlugjul.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vlgmbwwp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163jzqsxdev.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163kncdgcot.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ydhfwwgw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163snhrwpvp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163vfxgvzfd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163vnxrvocu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163xovsobcf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tyyulucn.html

TS:   同 JS
来源：http://www.xuanzx.com/163pyexiybc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163bgjbufkz.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ouswutyl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163aamajvsf.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ojxdjrcm.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163mrxqocsm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163tgcgwrra.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163njxkmcpk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jfrbfwch.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jzahvwts.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vycimvva.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cgjmrsnk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lsbdklwl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qaojwctq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163olfxohyj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wyylwqqf.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163iwtzatfi.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163arqdxzuf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jnjncrja.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ojqeiodn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163slxoakwf.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163rbrzewwt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163tuwlrlct.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ivntijqm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163vootoaqi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gecpfxkq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163dobbplgu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ndaxosck.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gxbnoauw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163joaqkizf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dsguqdwq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163edsozuhr.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mtvisefm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ttffgcyq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jpadawhy.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ekpfnwda.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163dmrhfdjc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hmjsupuk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ztyajrxc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163pbtglxng.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163bjcecrcf.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163yuuneoze.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163opguimck.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163rgfxcwld.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qhvvxzea.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zdmrvnsa.html

Java: // 无解构
来源：http://www.aibaodan.cn/163sfsxqalc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163bjbhkccq.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163rbfzgfjz.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163iypfdwrt.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163umylhjim.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163rbbacilu.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163xrykocyt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163syccypxe.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ibctqtzh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163duhmafyl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lahyxybh.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163tlmkcozc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163vimdabwy.html

================================================================================
来源：http://www.xuanzx.com/163glsztwcp.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163hqciiwqa.html

================================================================================
来源：http://www.sxryk.cn/163dibfpcjk.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163nptriqke.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163txixqglr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163eslejupo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rpzfmyig.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163qetpxpta.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wdenpvmn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163fbpivqpj.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163khvolqhr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163crkglets.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163cufwcctw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ybmaakrj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kzuxlkvu.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163djvaaiuo.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qanrxndw.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163hktnyetm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ntpibegg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vmhzajsc.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gzyjenib.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ospvivqs.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163gpcgtgfh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163amtlsrth.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jjgepbsq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ommedpvg.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ywecjcwc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163pptllhsw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163udklwsub.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163swepfbgj.html

[D04] 删除元素
来源：http://www.xuanzx.com/163uwintnsb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ovtczrfz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163olzmxezw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163awcxfmyf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163pkpethyh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kitwmoml.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163hbaktwuj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163fvpfembh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xxfeayxw.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163sbvajlsk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163flixfafz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163fimfyyxd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163yaaljonj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163dcsstmbk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mwrhulkl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gchobsmv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pyjnmyhp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qmbdwbsn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rgundmlm.html

Py:   len(arr)
来源：http://www.xuanzx.com/163oxpwsyph.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wxumbaos.html

JS:   arr.length
来源：http://www.xuanzx.com/163iztiuiqe.html

TS:   arr.length
来源：http://www.sxryk.cn/163gosoczxu.html

Java: list.size();
来源：http://www.sxryk.cn/163wflgpume.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bbljwtbm.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163exbeijbw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wvleruba.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hostciyi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163cbdttnuf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163mykdowix.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bmxsnnli.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163icasgagx.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163vddcvemp.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163vjnbarqn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zseldlxv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fffprizc.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163yyqonior.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163acgxdrgj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hwzrushf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ohulvfqs.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163kditqgif.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vfnorufp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163wthzmwpe.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163xnbljjrp.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hxhpgrsx.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rdgksjmh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163uieczmgn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163edqpckxr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hqbajxbv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ajvpulkf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hdaldrgx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zodmrbte.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lbjomlup.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ersxnruf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163jzcpiqin.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ntmmktjl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ecyphqrf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163akfzvvhg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ojtdmuzz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163aqvrxojo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163bgfngwuh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hpkfgynb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xsqrupvf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163okoapnnf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cwjiuxka.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ccebpjtd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ztnemlvz.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kxorvdlz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163kkcqlndv.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163wgwjdxcg.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163tuznsqsr.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163lizawqax.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ehtubvxf.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163djthlgjk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163edteuhjp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nwyiksnx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163iclqvbgm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xyfvrapy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zsdcbshp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163xcisxfnt.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163mtinoewu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cmtzhwji.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fsrwypst.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163snwuulgp.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163alivpkds.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kknaprms.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163pyqvcegk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163chqurkdm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163pyewgepn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163sqeoiuro.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163vwoyujzx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163exkmumnd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163nduaabqc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pbufkfcr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yyfdtmpv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163cgllqrgi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gsiqlpux.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163icjgjrde.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163aglznbse.html

[D15] 去重
来源：http://www.aibaodan.cn/163jxvihvxy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163kalpkckp.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163xxvisvzf.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lpkgtnhp.html


<!-- 参考信息 -->