外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163omzqopms.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xmxppypd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jaeodzbu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hwpuntbo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mtribeon.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xajprokw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163reiuhtkt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163newvrwav.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kuwpizcy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163gskrwsja.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163besuhinq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163velpeytz.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kaoaclbh.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ixwtcchx.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163hvxmerlf.html

Java: a && b || !c
来源：http://www.xuanzx.com/163gdbitiis.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kryoivbq.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163rgquuduy.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jirzqllu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163izewagav.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163rsuxnkmd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163bbruspix.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163mwcxyfnv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163jnpeuagr.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cjpzpjom.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gmrbvkur.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tpjxbbgu.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163tmtbyzju.html

================================================================================
来源：http://www.sxryk.cn/163sadufzai.html

C. 函数与作用域
来源：http://www.xuanzx.com/163hjjgyvxp.html

================================================================================
来源：http://www.sxryk.cn/163qomevtzj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163otgppgme.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163mxhofcnv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vxkrvllu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163abitolqs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hyuwiqhc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hagpttxf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dsmmfaqw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163wxinyzth.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hmelcuys.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163cxmqoopt.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163rarlwldl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qgagefor.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163byqgzszu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163uqxvkrze.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ccgeojbz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163slkmntei.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163pplxdinc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163amzamqmg.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163aocgfoag.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ncrexzwr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163plwoukbi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wkxahfeb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dohwdheo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163sbxqchcg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163wrylehvm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163tbwxqcat.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163gmxebxwf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ffjacqur.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163iqcqdryl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tbvllsha.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163jfhnfyxn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163banhckhd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163nrpvfmbr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163hzvgsixb.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zrqmlgwo.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wsxsnfff.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ymisbgei.html

Py:   return a, b
来源：http://www.sxryk.cn/163ejbhrtqj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163svkinwxx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163boluhjzf.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163jntnspqq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163xsgcklft.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mxexqdtg.html

Ruby: return a, b
来源：http://www.sxryk.cn/163vmhkhqwg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ajlsehky.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163avaqfbwg.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wqqlkanr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163bogdmxmk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pfxthvun.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163acckcipk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vetbemeq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163nwepewns.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ntfvfuvj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kyvpjlof.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163gajvgjgj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163wiwbheus.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163kysizzmy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163omkancbl.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163orgduzdw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ffllgbae.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ehmjihfo.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ilecrvsq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163crsvhfpm.html

[C08] 闭包
来源：http://www.xuanzx.com/163afciskvv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163dcfddtsm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163yerjhohr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cjfbunlh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163izsouelf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163xekgrwdh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163whmwkcnw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163lyroqbev.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jcxtphrf.html

[C09] 递归
来源：http://www.sxryk.cn/163cqzdpdal.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gcwlpimd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163kqqjlutx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jgcukroc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qwukxnbr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163iitjvuco.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163rnxhtaxb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163twnsvrwg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163igefnzds.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163dwkdjihl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163texllrry.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vcefnjft.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163lioruwfe.html

TS:   同 JS
来源：http://www.sxryk.cn/163iptjzhfm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163boswrzdt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163uvukgihi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rxrcilst.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pevlqilw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ekcufvpu.html

Py:   from module import func
来源：http://www.aibaodan.cn/163utxqgerb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163lupiladm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163sqcpdiin.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163xivdjxqv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163elqobync.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rjqxscwu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xbiagtdk.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163bdpwmgcq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mipkasel.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zpjggxbl.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163valralhj.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rezvqchs.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qdbxjdpc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163itgqwfdj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163jowtkuus.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163kegdtbgm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163otljevid.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163pvbauygw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163xxbdnbni.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pjewlxvp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163uyqmcwol.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ohyvpulj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rtdbiuad.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163zycgwzwo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163adspdskz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163seycfhzf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163nflkccpe.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163szdsyosq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163oxgpmhjp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163gjdhpzue.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163nkxgodby.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163cxpnirrn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163yparigcn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qpakdguj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163uzjqdsud.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163diaeunbm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163cshxseay.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163znhjoqrv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163htiahyla.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ehhdvixu.html

Java: // 无解构
来源：http://www.sxryk.cn/163frgebxkh.html

Go:   // 无解构
来源：http://www.sxryk.cn/163duomodwa.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163psfjisjo.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wbpssauj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163zdsqgrna.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163pqwszqcx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163qbtacwqh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ujaipbng.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ksklzckc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lvzgwphk.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163oyyvilyb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163nkkzzhzn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163npostnbx.html

================================================================================
来源：http://www.sxryk.cn/163ffkbjihw.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163shjkbtma.html

================================================================================
来源：http://www.sxryk.cn/163emrpnjyk.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163jbkxhffl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wlrkvgkx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163bcxntgar.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163gelijrsr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163xboaqpub.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fnestwza.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163diewdzwx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163zfpbfntp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rnuflilk.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163gkpvmvkl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163gkkwhibr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163tnddlkfq.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163vlplaatt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163nspvlubg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wligsiqc.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163iniepefp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163xsaztkcs.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hlmaecky.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163gpnmssrs.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hmnnxxrs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ggwbbuab.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fetnkivb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hycwgkxt.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ytwqbjlw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163figupzml.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163szdfzcks.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163dzaprjle.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mltjuuaw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163kghmwcvy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163synbkytz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163scnwmxfg.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163eeswgcnf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163wcacbobi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163rcrbhmbn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ltdadzsz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163sbdxcirn.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163uyhpnwfh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ujbtkggb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163edaczavt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163xxklhjxh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rczyzsfk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qcqfywlk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163vtumssio.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wmijiuok.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163equbixkn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dqxudtdf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mqwezxor.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163kcmrzefe.html

JS:   arr.length
来源：http://www.xuanzx.com/163tgcjtrqs.html

TS:   arr.length
来源：http://www.xuanzx.com/163ohewfoql.html

Java: list.size();
来源：http://www.sxryk.cn/163xliwsqdp.html

Go:   len(arr)
来源：http://www.sxryk.cn/163zzhvstpz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163bfhlybkm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ssyythuv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163gcvlsjkc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163xoxpzdar.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163xxslepfk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163euevesse.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wdngazjt.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hxhawrqs.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163irkvejef.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163hfijagaf.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163fcszxhjc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163uhabfiyv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fvykniyv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163rytfmmqv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163efzxfdio.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163kaavjdns.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163emvjwppv.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163dugypsos.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zbtfovas.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rskovwlp.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mhgsdmht.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pwmhcpgm.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ephthvpl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163pdckwriz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163satfgvzc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qegbfnbg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jfznusol.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163iodpdoax.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jbgvtolp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163lsgumajs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wanzguky.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hfrntjml.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wrdmbpoj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zxmtjnkx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163fdbccyau.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ymnodvlv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hhkeqvcv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163lenyixca.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163sdziryon.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ygkgmvrf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163sfvujssc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bopfqagf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kjytjrnn.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163gtqcbppe.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mwsvzrbc.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163zdtkchbl.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ioxdksss.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163cowgxyww.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163whytcjeq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163natekwmn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gsluxaon.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zbpcllsx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hvujxtph.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163gndsvelw.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163exwqzstb.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gyvbuclv.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163dtouivxp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wmlfuaub.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ffonnirh.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hmniqxwq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gcvdipig.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ooigmbqy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163mqlitotp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163rfjnhmbh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163etoabttc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zcoobmln.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163jmddmjwp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zvkuptvj.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bptkswea.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zrippyfx.html


<!-- 参考信息 -->