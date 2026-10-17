外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163iugqnfuo.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163nasbufom.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cejjwrao.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ttonbkkt.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163pbapifjj.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163bumzwbik.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kdfrbohi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163fekpidzu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qoaekwbz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vovvlzjr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163yswycpcn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163tkoyqkmg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163izufzpxz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pxsxoqxk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xqiocfqg.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163efhdakmk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jovcerlq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ahrfdqhr.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163abrloebg.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ckkumvgb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163uvvzeheb.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163bfcqmpxs.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163dyshwbkl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gdwcceqo.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163sjdliiec.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163frpitoip.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163jvsnorzo.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163unrbjoge.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gqbdqluq.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163isbsjwzq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163bmeavtgx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zllkzlvi.html

================================================================================
来源：http://www.aibaodan.cn/163jzsqmwpa.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vnubdgil.html

================================================================================
来源：http://www.xuanzx.com/163gpybeymt.html

[C01] 定义函数
来源：http://www.sxryk.cn/163htfynvmq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163tigozuoc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163veoxtphh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163awjrypdl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ccvwhcny.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163saxyfrsh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163olbqvtzp.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163haxmawyd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cgmkaexo.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ihcjjarz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163auovzkgf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163apfwusrr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163xjvgpwuf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xamjljsv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163aijewgkf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163tpbzvunn.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163owrjwyvw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163cpimmqyt.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163msqlbgxl.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gjqjhqjt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ygxafurt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hjfwriya.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gkigbkdw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163nsdeoxgu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ihedzvuz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163purxzzao.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bvnvergz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gvbodmbu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163iwpzfpow.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163vqttyndc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ozwheacl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163kvokwvie.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hqrlnhhz.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ihbgrgzb.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163huchhzzd.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lmdkgrjd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163elvqjheb.html

Py:   return a, b
来源：http://www.sxryk.cn/163iwgreygc.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163twbdkuem.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163djhszndf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163iqehhzjl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163vnazozak.html

Go:   return a, b
来源：http://www.xuanzx.com/163hxkkjqoz.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dbpubwrr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163lnvahtqw.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163svcthcpl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163avygifja.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163utslxfro.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ildgdenj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163dcdpymjt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ylpdywgx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qqmzaehj.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163gbyuxxmd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hhhpwdjp.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rzzykhpo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ogtrprkt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163yollgudg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163xjorzfxa.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163kvzpmfbj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163gauwcatc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163rctjlxpv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iiamazta.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163uhztiyjt.html

[C08] 闭包
来源：http://www.xuanzx.com/163bwknxczd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163atzhxmvl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163hsfvpmra.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dqxcsfny.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cliwqial.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pouwerdb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gfncwdhi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163yyimwbpw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dgwxxjrt.html

[C09] 递归
来源：http://www.sxryk.cn/163hwvdjhdp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xlqzdule.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163axgbahaw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bludaqqh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pixptiuh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ykslaqdq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gckziete.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lzepilzu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163sorsetop.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ladiopjs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163xsqyfwie.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163lqfnjwpc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163btqqctzt.html

TS:   同 JS
来源：http://www.aibaodan.cn/163yomtbjng.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163izgyexus.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gfxckhem.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163mvwjiojq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163bhwbijbb.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163gvlhzcur.html

Py:   from module import func
来源：http://www.aibaodan.cn/163kbeynhir.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163hzywmdwj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163apaetyri.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163njwvjori.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rwptxcjg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163wdhlcpbo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163zdohunrl.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163yshrnrnj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163afasqgyi.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163xbnmuafn.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hgozvtxl.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163taccfdgl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163uvqjzxbj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wgmfvjcy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163grvsfqly.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lxzmoeww.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163fjywlive.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163babkjpqc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ispbxbvj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bdenldsm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163gwmhdzos.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163miudpdew.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lubyrvjd.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pfhvhdsj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163onwzcgve.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sdkqdeqh.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163phjgaqpr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gbtygnzc.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163oabuvfaa.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163airnbmzr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163foekzdkw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163yvldyjnv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163bbuksigg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163pvbtfoyx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163cvceombx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163oetcquhl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163tubabmnm.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mnnizqot.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hfyfjvol.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163cmmgzeyc.html

Java: // 无解构
来源：http://www.xuanzx.com/163sjxukayq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163dbvhyxpg.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163rspozgjn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jsdxdxzw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163yveazzcg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163pwugmjis.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ebfocrcz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163puovamgz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163cptruqyh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163nmzfqvso.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163nritdkid.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163mkslpovc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dqrnbvlt.html

================================================================================
来源：http://www.sxryk.cn/163rffhtuyd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163qmxclfzz.html

================================================================================
来源：http://www.sxryk.cn/163tbtfeeep.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wjashvpj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jfqatgvt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gpcuanrv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163bbdzuozn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163eouzjfjo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163zbroqsko.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163euvakslt.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163gwbtosee.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bdqytimx.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163avdnrekx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163fdbegosc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xceblczv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163oqowzspj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xsmropeg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163nflrdwtt.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163jgvcaigh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163kkljjadc.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xenohvfe.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ubipngtr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163qugmwuni.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163pmcmiigf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163uguvyoph.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163kxrpcagz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163kdpnyyfx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wumwamjb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163yejdnsre.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163uebwgfzn.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xedwbrvc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163qltychfd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163mjxebwas.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ycyzsfxg.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163eurxghqw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163iwrehaok.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163lfymwolp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163xkndcmfe.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163oyznzvxd.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163yswtbchl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mcorhxff.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163sreajqsb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qmprlmcx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jjhmhamb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vipnndow.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163zqhewxqq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163idpguyel.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qwzldouc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163krvnuifh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yhazmnpk.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163lqlmzlun.html

JS:   arr.length
来源：http://www.xuanzx.com/163yyelefoj.html

TS:   arr.length
来源：http://www.aibaodan.cn/163nasmhwuc.html

Java: list.size();
来源：http://www.sxryk.cn/163ckxnfqnx.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163shoahvlw.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fnmadcdw.html

C#:   list.Count;
来源：http://www.sxryk.cn/163xdzpowgv.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163easdmsmg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jvqgvbzu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rniljfqe.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wpxqslbp.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hpicdwhz.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hiujatwd.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jkxxsaae.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163zjrlfcxf.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163tquobade.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ejqosgso.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163nhmsddlk.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kyhtevxi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163snfhmbgt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tikzqlgk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ltnycoys.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ethwhzhg.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lxcuabmc.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163yvkxuheu.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163qirenrov.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tcuhrokt.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163sphmjzch.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163dsjbkcxs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zkutxvkr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ctmsinwf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163rsoaqvmr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uvcgjcol.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163aatwnxeo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163gcpuhbwh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163mjmtlyit.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vdpsqyqg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hcekunau.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ipggdebc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mmimbzom.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163xontmdss.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163jhwahzvn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163vbmboksn.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163vqtmbtfj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163nkfsjhcg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163bnftptvs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163fqhumcgy.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163gvoggwwz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qgfcezlp.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163prnsbcaz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163btavpgvw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ycjxwenm.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163yjhlcjfv.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163abgspjvq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163mplpvsea.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gfbaafly.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nxigtnyz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ihfoxdta.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163sjxrhzxa.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163stnmcdjw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ecweeqmb.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xjgacfzp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ujnrhvcz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163pfdaknyy.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ozdhivph.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hcgxuqan.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163snnzzuzp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163oeejpypk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163bryboikt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dhhtgcvo.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163mdkirloz.html


<!-- 参考信息 -->