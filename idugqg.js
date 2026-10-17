外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163oyoyepmk.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163hdubqxls.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163lrtwlrfi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tqotcftf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mrkkgeol.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163fucfrtkk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ygslonjx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163skfugqoa.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163xpgtvehb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163zbjtyjtt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ualrxbnx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163sgenrqjs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163twnnqdpp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fozxnheb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163faxntvit.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163mnurxtbb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163bllzhrfh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163thfswuce.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tcslmfmq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xiegtegb.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ykwliisy.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163quxoeget.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ufrpyllk.html

Java: a && b || !c
来源：http://www.xuanzx.com/163iwoprpdw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163imeezrga.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163kxuufauq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ramghrwi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163zrrrubob.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163gtjrgmds.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163pnbanuls.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163duknozht.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163olyesuse.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163wggnwict.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163gskeaeel.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sovjfvkj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163thdxcedz.html

================================================================================
来源：http://www.sxryk.cn/163diiwaomf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163pjmigymc.html

================================================================================
来源：http://www.aibaodan.cn/163wnudavxi.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163uloaxatl.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163yleibazx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fmjqjcjo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163alozzndc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ijllnclj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kdumamet.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bdfuslwr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163leoxodcw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rnknimqb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163advgimuz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163qzowlvgj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163uauncydk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163lpbwyotj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163lpzwwfiw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zcskopsg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qmksirkj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163nuvuwfsn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nktjjtpi.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ylytkyxg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163rmixiush.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163snsajlyy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ynhewofo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wggicflr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qmgnpjxz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163tzocexxy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163nckavozv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163mwenoewa.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163anccfwbe.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ufuhktge.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163rbbokroo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163jjftjxkx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qziilwey.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hrhsjkct.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wmkjywgp.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wxwsexli.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zlmneywq.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hkyhcvqg.html

Py:   return a, b
来源：http://www.sxryk.cn/163ekctqrag.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163pvkjetpm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ovqvlytm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lintkmnn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163dpryyfmw.html

Go:   return a, b
来源：http://www.xuanzx.com/163tganpuye.html

Ruby: return a, b
来源：http://www.sxryk.cn/163vygzcers.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163abhhfcbo.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163kqrvwqic.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163cegthcaj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163arrwcank.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163hlthoppy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mrfpbnnt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163dylkqciu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ozgegyuz.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qlxhsmqe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163driastfc.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ipmuajbk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vswnlehs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163biqkatqt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zaxehike.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lweyoscu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163dtavrpgt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163cstjtreu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163oysixnss.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163rafojvkl.html

[C08] 闭包
来源：http://www.xuanzx.com/163bhdlmcnz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163evqfofig.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163beccwfat.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xacdrgme.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163neggpzmk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163jnrcnhpg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163zgowwnho.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163eoscpwlx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tljneakq.html

[C09] 递归
来源：http://www.sxryk.cn/163bpfeyvfv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163obetakgb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ygttbrvh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mzmfbszr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rkvetqny.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vprefbiv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ujkwhqjr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qmcgzbii.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163lvdhozno.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ruubsnsp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kuqrvues.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vefrpdmg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163pqzdsrxc.html

TS:   同 JS
来源：http://www.xuanzx.com/163ighhexlq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xpnwilks.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163buuifibp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163xfazmuea.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163qhxllbvz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163fwfndrfv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pkhardne.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ugpgxsbw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zmxitpiq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163epfgpdau.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163yrpfrdnc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ixommyxf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ayyxtcrc.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163mtsnqcoe.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163hezpqigd.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xsnbpjbf.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163liwradwl.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vilxaxqz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lybttvgq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163lupqbgtt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163fowsfjja.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dwmyptub.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163saethtei.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163tipxvwow.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ugitmmfi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sjixhfgm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bnwyseot.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qpfdvcdv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vrwkorje.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163spxibczr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tknnlnry.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163bgkpzvvf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163pnrzlxkk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163wwuxorxb.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tmbyatle.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ijbdzris.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163bsiogoop.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pbfyagdi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xhfmascm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163yybvfauu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qujybggz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vmzspakn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163sxgrctmh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163iqjcaktw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ryiomuyk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163tuyoyrai.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dyismbrd.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163rctthqzi.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163pstqaooq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jhpzgdpj.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163gmqvtftv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163mpslxewb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163mbzzoiid.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wcvpcrau.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163cmhkuzmv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jpcqcyzo.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163zzbvdrtr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cgtaivwl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ivsunell.html

================================================================================
来源：http://www.aibaodan.cn/163djflvcfk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163bicniwgs.html

================================================================================
来源：http://www.sxryk.cn/163reuekvxr.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wfzsnymn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163eaoeqjgo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163jxpoonsr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163jgppvkls.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hrgxqpjy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163pgkpqakf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ktyrajem.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163fnojonkg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xwtyvost.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163grukyvmp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163nhjaakjr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163djyxpmpd.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ustuuglz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163yohaltwj.html

Java: list.add(4);
来源：http://www.sxryk.cn/163grcazxiz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163brxgsscr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jxicwdaw.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163tkltucpp.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163xiudhqpb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bepblzpb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163sptqfleb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tvbsexne.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163trdahzif.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163wypjvlse.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163mpksvevx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163garyigiw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163uoqhmlby.html

[D04] 删除元素
来源：http://www.xuanzx.com/163luvwdrng.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jxogcitg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163rzckboli.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vabsgtxk.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vwfwrphp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163dobajvji.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pycihzzn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163agzkfhzd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rmisuawv.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163sbpzetvr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rmpfqyfn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163adztigsh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163xbvmmphb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163teigvnho.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163smhmrhqu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163japodrwf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163awrrybax.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163aautzdud.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lxcsccyv.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fzoxbyol.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wookmohq.html

JS:   arr.length
来源：http://www.xuanzx.com/163mapgmxfy.html

TS:   arr.length
来源：http://www.xuanzx.com/163cqgpvfgb.html

Java: list.size();
来源：http://www.sxryk.cn/163erwhkeyf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mmszodox.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163skqknwql.html

C#:   list.Count;
来源：http://www.sxryk.cn/163reyxaoyc.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163byrgonll.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vycafdoz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qqurjdwt.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mqhcygao.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dnlptosx.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163huhzwwmf.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163khgpjrql.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vlppvztm.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163wbfdsvje.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jsdcyojr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163xhlunyln.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nitzedoc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vqgufnqo.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vwkkojri.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163nxckkdhv.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163edyrpbsf.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163gzmuzhzm.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163yvtzkpyj.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163judombby.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ojijwsen.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uhwyeimr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163tyutlhym.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163kwxoxnuo.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163kxaukvbv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163zosyeacu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zfmczkyq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163oxkogkze.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fjlrhcep.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163fcjehxyb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163nhfpkdwa.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163urrfhakp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163etcebzwi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163warpwstl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hruwkwuv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vmioxhnz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vayqsqtb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mindnqjf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cfctjdao.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jqqwzqtl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163seatncdk.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163amcsizjh.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163pdrzzvlm.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163kpwafjdd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163skpwyorv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163yrmdkceu.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163veergcfc.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tmxvjros.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fsastaem.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xhtoskjv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pjmvempp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wwhptduo.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163wafsfbwp.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163wtzlqpdp.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xeokmyjb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ghjvysgt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163beltbawq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163wircvoxg.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dbozqsoc.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sefkozmc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163nawhgehg.html


<!-- 参考信息 -->