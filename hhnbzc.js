外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oqthktkd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163odbneawr.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163easjszqg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163pfupxstc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wlnldgio.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163knfveyqj.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163gloavxtp.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ltnirmkw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zpgzqoiw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163trxscafq.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163hoxtjykx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163uiyqmnag.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ictgrbbv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wizdxuly.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xoliivaz.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xzobsmgu.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163lztnebxb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hlyjoduu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163klqhmtbs.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cwkegmyi.html

================================================================================
来源：http://www.sxryk.cn/163atuihmzu.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jqaklsuy.html

================================================================================
来源：http://www.sxryk.cn/163vwusnegf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163kntwefml.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163oqtxctow.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zplevhgr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mmaanhoj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163krcbeaxq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xwjtmyva.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163strzdxhg.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163txpankpt.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pkjqrgla.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wkmvspth.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163dlimxyic.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163sezccehf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163siqfrlbu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163klvqwpxv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163yjknkswl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dapfwgkj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163dolcluzz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dwwzsdgn.html

[C03] 可变参数
来源：http://www.sxryk.cn/163fhwzowil.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kflsrlhc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163gebumwot.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tslxnbqp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hrubpejc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wbhlqrfv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163cxxqvywt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163wpwhojuf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163opaqgzgy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uebtszdd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163jygqethi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163secapfzi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163rphovevt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ktevvwwq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mlxobgrx.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163mlksnurc.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rjynnrac.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jzzcpvyc.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163grecguzr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163qvwueiec.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163aeohowlq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163iaihvnlr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163hljhqjox.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163dpmhdboa.html

Go:   return a, b
来源：http://www.xuanzx.com/163wxogamwc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163sjocilag.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hgvcsjid.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163jvtxetjs.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163huxsintv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163nolkupak.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ztuibuse.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ygwueusc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pdfjhuev.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ftpuuejb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ubopezen.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163mtqgdvau.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163axmbkqti.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qvrukgcw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163rvdsffez.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163frfuaksx.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163gcnpkzdk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163djjuplsj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163fynrfqjl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dkfzsuds.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ncxcihiu.html

[C08] 闭包
来源：http://www.sxryk.cn/163xjfojhlv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163bojoxryq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163flxxlpez.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pjgqgohu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kkowtvxx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yqkqcwng.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qwxqlzbl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163kwiseiuu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163veueotcb.html

[C09] 递归
来源：http://www.aibaodan.cn/163kfhghffq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163iidbrqwr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163xgnxustu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pazfgysk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163afubftyt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tijgycjt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163pfhtjcrt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vqxnvpsa.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mprunbuq.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163xyxfkdnw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163taquxwsq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ffbphnwk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fkipggol.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gbgvnfab.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zncbgrvd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tfbbglyd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163cdjudpdk.html

C#:   块级作用域
来源：http://www.sxryk.cn/163nsxbtgha.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ailrtpdp.html

Py:   from module import func
来源：http://www.xuanzx.com/163rnwfktmf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163gqsyrbuw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163pvrxewqe.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163nfenljfk.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163imlisoys.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163zvtazcgx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163chmbnfob.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jeuehyqv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163znrhcmtk.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zpihqwua.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163gdwzithv.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gslmxhzu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vgtbtvxt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163sulqerif.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gjyycguw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wedvwept.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163oitdegaz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163cukchjte.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mbvaeghj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rmjmposc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ahswzefp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bjhmrpso.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yxanifdy.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163cythjujg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ztufexer.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vvywdbwe.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163vpdoszjy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163brdducgb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pzipvdes.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163arlmjhpd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rhqeksmf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163dmwjgybf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163yrlwzjnk.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jqohuopl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163tzlsrvlm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rmbxjyno.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163mlalwzzb.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xlyqmlbb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rvwcionf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163xiitihlm.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jffisabl.html

Go:   // 无解构
来源：http://www.sxryk.cn/163bdmihtlp.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ibulxkhk.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163olfdbggi.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lbhgrbnb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nibghtvj.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ttyjwfdn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163amfacnxj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163acsljqgx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163gygptclh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163rbkilvom.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ozzslkqc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qnbhgdhb.html

================================================================================
来源：http://www.aibaodan.cn/163mvvxdipr.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163thencrvn.html

================================================================================
来源：http://www.aibaodan.cn/163dnerecdy.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dkoimqlf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163oojofgdr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163inmgcjfy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163odjemlck.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ocoyqpwi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163yhypydex.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163yjfjxupl.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163jdatenew.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ixjcrqrl.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163mwljtkix.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163gclxtrwo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163zvwuzzpk.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163oauhtrwn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163snocjnjp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rytkndnn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ydzqrfuc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163piqghedm.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163rjtrjsqo.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qxlhveew.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163cnmyhaty.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163nnrkdzfc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163pyeqrria.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163imqoajyi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ufnorbnn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163avvemorm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ufjgpdqb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163jiqfxmkj.html

[D04] 删除元素
来源：http://www.xuanzx.com/163csmebgir.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163diwqpfzl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wqqbijdz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163dghbcuso.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vauotfia.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163rmyjkbao.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ytgwdilu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ocljupnq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zpyktdcm.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163bcdygelo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163aeipszut.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163nzkeirxw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163hrwblnog.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163twdcnmns.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163sxkfwmzl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mtaavcom.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163unspitbv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163sesvsdai.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ecowihrp.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163wtvobwde.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ehvvaehu.html

JS:   arr.length
来源：http://www.aibaodan.cn/163zooxcwqv.html

TS:   arr.length
来源：http://www.sxryk.cn/163atgnpzre.html

Java: list.size();
来源：http://www.xuanzx.com/163vpmlcilb.html

Go:   len(arr)
来源：http://www.xuanzx.com/163bueyvdco.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163owvrgvui.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163bzpcxibx.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163macbybez.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ztaeonoe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ousnbtid.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163oqnrnybr.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vrgklyyk.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vsharrcx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163wzqcgbgz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163edwfjyag.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jrkqivpm.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163oqzblpkg.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163cdteukka.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163psktszyf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163kwzvebfu.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163juvbwfpr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163dfbpaaug.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163hqsaqofo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xzjhdwoi.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yqkavcly.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163jyniwhks.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xyobhjto.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uhcsrxrf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163uidqeirr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163txpjpndx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ywpftueu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163flctawgt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163njmxlkes.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hthejyou.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fchawjhu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vqljfvkb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qxvwhefy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gnksjvzz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ncuenclx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163nnrgymdk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163occackbp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163tebaprei.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kojnnonl.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163rbzerpiw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163loahjeqq.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163kcldmrab.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jylfonbm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163kszjmvyq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163arhvbwgl.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ubvrycfr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lelcuaoi.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163yjdkuvqj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163cabucgko.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163xoyrqhev.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mhzdrmfc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xinwbcmw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hoxbjojq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163skmnmcqx.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nnucsehj.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ddynvudc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163fdgoqley.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163fcsppaob.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163yldxnqdk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xwnqrrlz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hjpvlrxn.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nbwqanjl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163gdxoaeys.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163egiqzfrl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hwvloxec.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qqnxiqxb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163pigjpmhs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163qvsuxlqx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ixuneetd.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kaikadtr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bqthhzbe.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ersysjfm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xlzktriu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163sthwddot.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zoklwzho.html

[D15] 去重
来源：http://www.aibaodan.cn/163ltnxttur.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nyfgbqzs.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jwpsfvyq.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163sxokerkf.html


<!-- 参考信息 -->