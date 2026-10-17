外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163fczxrjhe.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163yawzppou.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163irqhepnr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rzcvydqh.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163hopmufmf.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163zqseceny.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163muqmrqbd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163kfqabqgq.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xrzoadrx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jfdtidts.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163kksxwjds.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zwsbcnzr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163bcrwekog.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163tebohapy.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163irwxaqck.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163shvsjnzq.html

================================================================================
来源：http://www.aibaodan.cn/163rqnhvklb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163enmugipi.html

================================================================================
来源：http://www.sxryk.cn/163xsuhstjr.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ctkpintj.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ldlwyzpw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163itjbdjja.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jbeudkqf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qafvsvxh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xrcwwdrf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163bosxkncb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163eeepfzvg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nourjagx.html

[C02] 默认参数
来源：http://www.sxryk.cn/163fytztywt.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qlpkmjhq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163kskhcdll.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163jvbavkrl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dlcgabhg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163zwsyrqwj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jtcaiews.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163elxuxwzt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163lhyyovzp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163albhvans.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ayruuyve.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hvjncqru.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nxrqiyjv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163oxqolqft.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163speeapdp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163enmyyltb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163kvqcohde.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163nkmzdwwd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163klhtsmiq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pjplecea.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gmxxekdj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163bthmqtkt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163tfgcqzha.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dvdvirvf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163cuxsnqcm.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mtpgngro.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wrimyaaq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163kzgiaonz.html

Py:   return a, b
来源：http://www.sxryk.cn/163gsrgxxfw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zibnwmfc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163anqvaxgk.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163wtlrmqwg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163bbtnokov.html

Go:   return a, b
来源：http://www.xuanzx.com/163nsjqwjcn.html

Ruby: return a, b
来源：http://www.xuanzx.com/163flqjsxlv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qzaenexs.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163psndlmfa.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ncbdhsck.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163pzxtwdma.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163cbnskxpv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rbwrcltx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163icfizjyz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163joxrggrs.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hpohqkvp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163siskodrv.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163auqacaqd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163hhbekilc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163fnrzajat.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163btmprewc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ixhibwtr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163mupasgsa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163omlwfjlj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dbbsioev.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163qkutqfdg.html

[C08] 闭包
来源：http://www.xuanzx.com/163dlastpgx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163acgfvmjy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ptwthuxt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ucksbddm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163swiygtbs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xwapjqrp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mzlosnmk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163yiolkiyv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mjpplhmz.html

[C09] 递归
来源：http://www.aibaodan.cn/163xfjpqdsu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dkawqnbx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163lzrblpuy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163klkrajar.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ifcrcucf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ggpxgweh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163lchvqkim.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163smcldcfw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163tikrjmyv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163mfskxzff.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163twrgwepv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163iodmamid.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163zcjjdriu.html

TS:   同 JS
来源：http://www.xuanzx.com/163xtbmodxt.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163xfxbnkme.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tylezacn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163anqtvelx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163cphrbblq.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xxlnerzf.html

Py:   from module import func
来源：http://www.sxryk.cn/163ljyxttin.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163tdksxatz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163gitumtzz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ceqdnmup.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163rfcowrtn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163iybxrpmf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163vfqhieyd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163mbckrgon.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163bgbiynkq.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163whmovvid.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hkkkrukz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ujrizkhc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vvjbzxpv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xxlquobh.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qzdrvuso.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163cjxeerqq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163gmdsphxn.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163cizlwkmv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163vuryauhx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rxnxvtxp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163dgjrozov.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yhietlbg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163btacnlph.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163yylcatsy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ltrxhany.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cgmdeowj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yrwfosfp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163tglvssys.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mlykzkqv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ohqpxjxw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163dibggjyz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ywlbeqxe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163mtmcchip.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163niifmrzb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vyprzetn.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163aizlwneq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163srlnznxb.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163dqexbhuz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163fczwgqcd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163glfhhqhe.html

Java: // 无解构
来源：http://www.sxryk.cn/163tmgzzjgu.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kzpjdquk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163tuiaslgg.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163uwoewnjm.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163qyrnvzxe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163gvyojyfr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163xkrcrpus.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ijrcykhz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163wtuqgtuu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dulmzdkq.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pktvhtzx.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ppddtlsd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qcwlcsez.html

================================================================================
来源：http://www.sxryk.cn/163ggvfrrqk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163oujfpmqq.html

================================================================================
来源：http://www.xuanzx.com/163zwdofacr.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163eklddnul.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163qaguiyxo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xxrlfhhg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vvvxwkdh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vqmurwqu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kdmxagxr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163papyxmtx.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163iawerxbe.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163sfesouef.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jtggeaap.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ltnpboja.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163bzovvjnt.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163modtfbkn.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163yroycohm.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163wnixqlxd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163qyznjkkf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163xucqrxoi.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ztpogisc.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kyyqovmf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163czlctmjv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163wbusosta.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ahtvjcgv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163dahcfpvi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qrodfpfc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163mdlxuimd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163poezpfcr.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mpkibtgd.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vsgxsscf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lomhdmjh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163nsqshsug.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163guoopxci.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kxvgfoey.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163zvoxdaqv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163tbcrpwts.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163cwbtvvpm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163poiblgzh.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163gvrdudpk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163eutxxzln.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163edxismtr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163zacdzexe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163lqmktdac.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163whsevduo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tfhhtljk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163uyizozrv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ggojwpfe.html

[D06] 数组长度
来源：http://www.sxryk.cn/163nuaiwzij.html

Py:   len(arr)
来源：http://www.xuanzx.com/163wllchyhq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163amkvgrvl.html

JS:   arr.length
来源：http://www.xuanzx.com/163susrqxcs.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ypdyknko.html

Java: list.size();
来源：http://www.sxryk.cn/163stopdtbf.html

Go:   len(arr)
来源：http://www.xuanzx.com/163cwqklkad.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163cjxkiqbr.html

C#:   list.Count;
来源：http://www.sxryk.cn/163bpzvjgeg.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163sqcfnjso.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163etnpnete.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163wopaixjb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163viruguqq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lvumpqsj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163myvcpimn.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vfbzsplz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dnnjcfii.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163skocqipv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163kgzrknjl.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qqmvgpbr.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163iankerkz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163flgebctn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163pmpnwuii.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163yzrkwbjp.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qjynlmsa.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163tkxxudga.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163myxkvyfz.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ammaqwet.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nnxekhjw.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hebyvxxb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163klexmrve.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163rffefkxn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163cxuwukqx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jdkwfseo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163otkiwagz.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163dmctyvaw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163acbmmeei.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163punshnin.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jcgylaij.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163gwtqjbaw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hrrsgehl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163nktqosfu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rafvhduu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163kzbatbtk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163gotfhxpj.html

[D11] 反转数组
来源：http://www.xuanzx.com/163fuquiigv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163saeupbtk.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163kbfqzbvz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163gxrsltxv.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163aiiywles.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ogqkkffx.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163eoeypayu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163igmrobgg.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163juznwvhq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163amluxagc.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ugifphwk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mfjgcqnu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dpuimihy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mwbijyqb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163puixkeuw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tyecjjic.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163hjjymbjf.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163igyowwku.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ycjhqdfa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ztsnietj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hzdbnvss.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xgacfjqt.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fvjvbbov.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ydgrakva.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163npscoiop.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wnpnjksd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163uvjdchur.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ntyumgjq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163tjkivjme.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163kkahimzy.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ykgukjzc.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mwgaxyih.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ajwfiuub.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fizhbbed.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163uoxzjfkz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dkhprqxw.html

[D15] 去重
来源：http://www.xuanzx.com/163vilkxhse.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xqsuvzoc.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163spdizntq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163aeaifrby.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163goiaysae.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cjvmdjcq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yrahnwou.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qeywgvkf.html


<!-- 参考信息 -->