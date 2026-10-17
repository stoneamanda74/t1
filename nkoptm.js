外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163tduxigkb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163goffvrei.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163mpowsgco.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163lvbeuuzu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163cjdwwrtj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ecmodskz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163cutdftaw.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163paotmulq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163xwjkujrx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tgwagqzs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ytwudrum.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163tvoxtrhm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163dlnvhgzy.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163awxbdvku.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163atzsdwdh.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163amxojeko.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qgminqap.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163pitolmqb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eqmuqrtv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bovfxijt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vnknxojr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xzjpjnst.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163hgjzacfs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163sdqckbyv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163temezpqi.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163nyvzytgy.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vulctmrt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163liaoyoaz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qjiwrpta.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163eazmsryf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163skboaqfu.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ujvodosp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163enphgmrd.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163myqqxcso.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163rutnkhfg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163eiuinanh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mfvpszdt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163opakiyoh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163temtnxzc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qoprmcjf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163mbsxgaex.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pmlwohbf.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dazrkcki.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163prrqlrrp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163lczajyng.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qyttswct.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163lwqmcskk.html

Java: a && b || !c
来源：http://www.sxryk.cn/163dbjorxcp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163foufnqgx.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ycxyxbbj.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163loeifwun.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163qaneoopm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163cmvmkyjz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163zpbdzujo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163yscprcxm.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163dzimvxhp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163birxadqy.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163xvzmghqn.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163sffsispb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163gqacahbc.html

================================================================================
来源：http://www.aibaodan.cn/163aceqbcpn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lgcmxqsv.html

================================================================================
来源：http://www.sxryk.cn/163hrsfefnv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163axdprynf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163eeswuxug.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iftqbntu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163kvtrynfn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163uhlmrtgv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bmwqynjr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dlvcicjk.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163pgpnpslg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163frkijdmh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xbnbkyje.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163irlvzvjo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163algnnvxy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163udeodpxy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163arfrmxhr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163nvpflrvs.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gslhjiso.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163fkmzomdr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163zdqsdgbk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163lrfjmnsj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163tbejshnl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dtvhizei.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163oprkmjhi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qvfdhmdo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163tfkmptks.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163mqovnicp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163cppbawso.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163zjumuhhs.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ydsqmhkb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lggadqzg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163epazipdu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163oogdcmrp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gzwqdhvq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163tikleraa.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163sptvyxlr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163huipnkui.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yrlqqywr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163wwlfwskd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163tetvnymo.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163twjvgmkr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163hwtscqst.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163mnajhsuz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zbbpqxzi.html

Go:   return a, b
来源：http://www.sxryk.cn/163glwcsrrq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zgpldajx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163cixcrkze.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ooiijvia.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bhxobksg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163mubamczj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163qshmghhw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163egsafhux.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163oaryixda.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dyaelanm.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bvbnmvhl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nmdbkcid.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xbmqcvhl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ltbobdvw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163zomjxwgu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163podisjqe.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163tefexdur.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163orvetyav.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163numzwmvi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163nzndjlxq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vgnjcmph.html

[C08] 闭包
来源：http://www.xuanzx.com/163kyyyutnn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qdifhhmc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163dkcjnpgn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163orzlgqsr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163goodgnew.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wpijjwve.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163sqfcsxlg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ifsajqqa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lmvzoenu.html

[C09] 递归
来源：http://www.sxryk.cn/163edkgdmsn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163qlynwjaw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163djmwberu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bpdrdyhl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hxpqtkor.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163elynipuh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zsizfnmz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163tlbgfldp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nnahygbu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nwhllymz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163kyruwcnq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163axifhizx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163lgenmmbd.html

TS:   同 JS
来源：http://www.xuanzx.com/163paoigjlk.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163hpziakrn.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xwqkashe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jonuvcfe.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kzahwhox.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zeefrqlb.html

Py:   from module import func
来源：http://www.aibaodan.cn/163jucsygoc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163mpecytmc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163weeudoue.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ltbomgfv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qargytgq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163vbgkjmnk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163lzhuyzin.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hncajmpd.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ibqqngek.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163cddkvosg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163eoqdittw.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ecgsxzqb.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pihwiose.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163clbclyxq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163hrygaxwc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163uvlqkbdh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163bktwqozp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163nlbmcguv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xiahonmw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hqyagdtm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ehrrbehu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dszpdysp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vaqrwsrv.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mzdimrmo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163eplabyqk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163thkxqloq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163onojgdly.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163mtttnmtu.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163eprvlzbi.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163gmfizrnp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163zrrgsnaq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163dvqeqevo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163skvuqbsu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163naucdpso.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163bzhifwrs.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wiymnvgk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qocutsei.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fwpffydu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163owdudgrb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ajjlvzjx.html

Java: // 无解构
来源：http://www.aibaodan.cn/163narbhztn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163dvbyzrbu.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163llhcrhxf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163litgnsrf.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163rzzhumbs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fqdmtvto.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ghsbmpyt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163lwgctnfg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163keavtlcx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kscrghrw.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163zdhhnbfo.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163yqcvtlzm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ixdwster.html

================================================================================
来源：http://www.xuanzx.com/163ltsjmwbf.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163exnhpmfw.html

================================================================================
来源：http://www.aibaodan.cn/163qpymvfah.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163itdgyiek.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163toyzkcsj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163gfskpcrh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163oagcznvd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163zitwhbed.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163sxamknil.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gugultra.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jegsfnmo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dpkqwnif.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qrzykqtb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163saxfcouc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163mptaohyo.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vyvryjxn.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163swmyfkge.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xtohhtvs.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lfzlngxk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163fdwzdvzv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163wnzffpga.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163lcqxtxpq.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163sxcfjvcm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163edsamfjz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ujlqyflb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163dwmmypep.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163hsedonvq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163zsohuwrs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ikofyvcl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vogqaeti.html

[D04] 删除元素
来源：http://www.sxryk.cn/163enshhntl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jjhoqepr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163tpuyrbea.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fjsslggc.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163msccnqbs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xetfwifr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163krsffpvo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rgatfgfk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163qrrquroj.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zkknorbn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bbxnziog.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163bvpxeuhr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163aiavxtip.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163eensszyf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163oahdnhns.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163sroxtwnw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163eftrshls.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163rxarvhvq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163eraslnfs.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qhlwwuon.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163oguhjsbt.html

JS:   arr.length
来源：http://www.xuanzx.com/163cdmmihxd.html

TS:   arr.length
来源：http://www.xuanzx.com/163zysfitaa.html

Java: list.size();
来源：http://www.aibaodan.cn/163xkttamja.html

Go:   len(arr)
来源：http://www.sxryk.cn/163jhbrwkdm.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163xgclqcoe.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ekbrfpcs.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163xkoruzin.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mnivnswy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163giwpsudd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bpiiimoj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nzwbsehv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163vfjqsabk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163eacdgesy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zookzury.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163wesofcun.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kxtmhwma.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163mdvrybfw.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163srhjrcfl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163swkdszwq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cxczqcuw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ncilaenh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163orzbuarr.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163liuwdgag.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163vgbciryw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163pwwpqtfb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pugtptsr.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163edtyqyfh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163rhemiyis.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163etjlujaw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163kovubbql.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jzuvkkkf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tmrvwird.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ubfnsykj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ziedpyuj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163tkfpxbrl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163albxapah.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lmxcxwxp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cwsjssoh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163lxcambyo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wsuihgss.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163bqwpycgz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qxyocixa.html


<!-- 参考信息 -->