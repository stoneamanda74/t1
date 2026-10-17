外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qwocseak.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163iuoavgnp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vifcmrja.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163bzboldxs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xqgskvyt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xvsgrsbh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163xwkkdamh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cdztjxet.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163nnjlwgar.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163dazodiax.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jvzhigtt.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jnetoqzx.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163wmodsxek.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tewmwkdv.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163yhgeuksc.html

Java: a && b || !c
来源：http://www.sxryk.cn/163dtdfzrax.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163yohigjra.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wmemnwvn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163cawinxpr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163azprokoc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lpooozzs.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163udoldsbk.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163anxmells.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163dammyxbz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qugasuwm.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163pguanggn.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163wzntswpg.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163idpeeazb.html

================================================================================
来源：http://www.xuanzx.com/163mhmbeksr.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rxcnosoj.html

================================================================================
来源：http://www.xuanzx.com/163eiemvpfi.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qgvacboz.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163idkcsgwh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pvmmoevx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xurhsgms.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lhteminm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163btueumvo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tjygmqxp.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163wyrejglp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yclwkxee.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163kkmxztqg.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163vftevyex.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163lmxkwgsu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wpyvnvfk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163budupzrn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163mgwnafjl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jofuavhd.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ywgirljv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ftdabzam.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163fddzeksv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fjktvink.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fagwekib.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wdckctze.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fscbnmgm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ebwjcrkx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163umsvtnkd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163lthnowfz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163czfqaacb.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bmtbcltn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163mmfhzlhl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163zwlacfuy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163llzkvquw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163glnbsbtd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163epzuuggs.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kukbhhvs.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163upammjhc.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wpilogov.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163cxcedgxy.html

Py:   return a, b
来源：http://www.xuanzx.com/163heepbzgq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hyplgwji.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163gatyjbsp.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163wliyimjg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163aqtubedp.html

Go:   return a, b
来源：http://www.sxryk.cn/163zmecypdz.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ahuovdgg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163rmhczhwn.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xjqugksf.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163srfsjwdr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ojwyqdmo.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ebomcury.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163cndsjmmd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163fjsimtee.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wouwqjgs.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163zfhecbsn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tfbyawjs.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mjnlgucf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163oovepijd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ewqsywab.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ridwuzvh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fttmziny.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vqwqjqtb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163hqspzxfg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163dhlhniuu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163csadmwex.html

[C08] 闭包
来源：http://www.sxryk.cn/163zimdhaev.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163clazqdjh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163xrumhijp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jgxguhya.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wccnbzui.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163dngxgjmb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163nfhoiphy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ooyldouv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xvmrpnnd.html

[C09] 递归
来源：http://www.sxryk.cn/163xnfkozzo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163sgsirurk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ppbrguqe.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163awhagptn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163htlxssdy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163crntwlvb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qyfoiqoc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163nlzmtqbx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nsojwkws.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163beuvzaob.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hdjknkxz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163gqjgmxdx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163cdvebdth.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vdybywpm.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ggwpjmnd.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163jgnwwejs.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163yxbknhel.html

C#:   块级作用域
来源：http://www.xuanzx.com/163dglxvmlz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ajejxqkv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163hagdamsb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163fixqfgvq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wduasezj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163bucyvisb.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163sokpbhwl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ergpumxv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163srnlqwej.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163jqjcuenu.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163isuejelc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163svookokd.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xfnysfpt.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mtfzousr.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163uodibdfk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163seswtdxx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163eebuusko.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163kjtylbcj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163kaiixttv.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kjeibqxg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163iynhysvl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qcdwhiyb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163isvjuuyn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163blunpazf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rkbechju.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ggfivgwr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163vhjtavgg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163gkjqkmni.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163tjucpcru.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163aopjxwkj.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163wsbwgptw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ngkdlopm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163epxwzzlu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zlbnfymd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163tyhpvdqz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163zkfjbgmm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163yxjflexa.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wtioncqg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jdpyrvet.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163rxkpcnfi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163xmxdnkkb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163cqppmeyo.html

Java: // 无解构
来源：http://www.xuanzx.com/163mdfrzfpv.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163oykqrfuu.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zeiekuof.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163aarbgzvi.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ppmlwlpr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163vvfithlp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ygykluyv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ccrknlqb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163vczkrvvd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163abnzxtga.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xqztebyc.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lzpzvhmr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ysjhghvc.html

================================================================================
来源：http://www.sxryk.cn/163kjwqehlq.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ejgspmiz.html

================================================================================
来源：http://www.aibaodan.cn/163fsjwpurq.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163bgzeyeip.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163juqftvff.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ijzpegex.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163agccravs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ftjhtbnb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163remlpbxf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ttzbefxh.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163pulozzkv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163lvcmjrzp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163tnoheemq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163grssmlow.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vidvobcd.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hzyneumq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163aohekqyq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vdiqugwz.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163lavogdna.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wbpbinvd.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ilsylebt.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ylsusojd.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163uqcexksh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gglmnlds.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ozqatrtm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163oaegjmlk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ybfbmqcl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163aseynbae.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xrdyafcj.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163htvxlnmo.html

[D04] 删除元素
来源：http://www.sxryk.cn/163hfbqzymi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163coevsjgo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rhidwgil.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ujdbxxvr.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ssiyaqhn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nulmllii.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rxhnjyfh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ehjuttna.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rduhbhyl.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ovbybxft.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rvruxbrr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jhcwcsuf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163xbjacsbd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163vweceywz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mfabdjvm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rulbkvof.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163onkkyold.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163noisejvt.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ytjmlpmw.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mkalcjdq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ycwwsfak.html

JS:   arr.length
来源：http://www.sxryk.cn/163wczozgnq.html

TS:   arr.length
来源：http://www.sxryk.cn/163oniilsam.html

Java: list.size();
来源：http://www.aibaodan.cn/163crcsbrmf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ckckqgtp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zjoqtmvy.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ylnynpne.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tmyaugsl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vxewqtoj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qljruhky.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tfmdfdyi.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rwvqwibp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163brussmab.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163kcgsngvx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fenfgzgu.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xklkzxxb.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163uhisxhgx.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gtjeavfg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vbpxlsoe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163txbwcjdb.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163xjjvzhnl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163qoqaswuh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163gjahkafg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163stukwiwx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163sgacaynl.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163nsnfolfd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rtzjvhen.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163peyoilki.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163kpnzjwcs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163taomrptb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163kcjbdivd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163cwpftrcl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vruiuvly.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163azkwqyrc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163xlhkqbed.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zbmvljyi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163eotejuuy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ltvaksiw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iudrpbvt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163zatyhazw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ezdcxujp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rwkrbkym.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163czfejkum.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xteplyaq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163oppeybfv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163usgquzpx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163oozmksar.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163sklmyxlf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wdkytlxk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163pgrovrbs.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kekavpct.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163azwdeltb.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bcjufohd.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163meqzmlpo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163skdbdeqq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yxhlaoxp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gjxvjhsh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163rqkarshp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pknsgnie.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163vhckvkgq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163uzmeqcwd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lckofuqi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163mhbitpno.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163gyvtmdku.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yizpixii.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jthjspec.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163egnphznw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163bcxggspx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163bfqxixbk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163xyytwnvv.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rwvakifb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163icqyeutr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xfkpoacc.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163khtlflok.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163buejobnu.html


<!-- 参考信息 -->