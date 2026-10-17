外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zcbzmknh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jkzrxrsq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163jpmqxzrf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ymttgorh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bswodtkd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gpcmfxkk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163zuhjoset.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163lyahejpm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wlbyniwk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163lxvenklq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tirucepv.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163irlvalhb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ctyvtcya.html

[C03] 可变参数
来源：http://www.sxryk.cn/163basprjpu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ykggtdvw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zlnppzxi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qwknatcd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tiicokhg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wqoqggwm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163raxrfkwm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ybtkihzr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ovltxfvv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zncceqbr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zkxqlvlu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163jowhcucm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ekgeesbo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163wgshnftn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163elaabimn.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ctshmccq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fldggofw.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gojjmacr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163thnzxghn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hlmzgcez.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vpqsufrp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qqahdtre.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163eyohvwnt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yybmopbq.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rsmmccit.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kmqdjekv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163fqhvtaay.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163gghoqjxh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163brvvfwvr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163bgravdiy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163whfsfsez.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163dziqahiy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163lviauqiq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bkeqqkdn.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163osweajwn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163pvwmvbus.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163pmiiekae.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163rfuvvdsj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163htxrkemh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hkzmokwp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163loalomwr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163lnqrbtpb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xqanpbpq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163igwovuuf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mgvdvobc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163mrxueraf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163cslporge.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163beggdnlr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bipmjwpx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163exwexkkp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tmqqdftj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wjhkqevt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163zyohpvst.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cviajjmm.html

[C09] 递归
来源：http://www.aibaodan.cn/163ufhbradz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163eixitdvo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tpirmhkl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xhdlnppm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xpsopigh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163nrlcmcds.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zptqlnfl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163exmuirby.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ymbjmpsv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163wpeuouar.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kvhfsmrn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hcuukdpq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rhqbdujo.html

TS:   同 JS
来源：http://www.aibaodan.cn/163kikymzts.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163mijljdwn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ecnjwwwf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163nhuollmy.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163fmaahuhb.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163leifcjsj.html

Py:   from module import func
来源：http://www.sxryk.cn/163nnbpjrjx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163kxuiuyzk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qexatiqr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zxsytxsq.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ocpwdxkm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ozpzynlj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163gpghavwj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ijqgqexs.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163duwivxju.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hsxitrpq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163vnycudps.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nvwfwyjo.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bcmvbfeu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ymjlpuyp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163mcrfmwxq.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163uowukaep.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ogfnnyle.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163qluquxqr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163juhmruax.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163llwxqqwp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163pbjxyrkf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163racqvjsm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163egnkrcct.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163sguhjmlo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163invprhrp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cdmbvgtl.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163nxuxhper.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163kmddqsgw.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163mgqlbuiz.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ubxradno.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163gflkqhhs.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163oqpwgmtw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vooeugzd.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ieptytuf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163uukrteoa.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163nrmjxbmt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163sklctpag.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163dleorazs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ccptifij.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163xzbjrdqj.html

Java: // 无解构
来源：http://www.xuanzx.com/163nmcdxchg.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gvfmygco.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rsohtrum.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wrqtaptx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163tawhrpzm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mypwhjwb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ntxjrchv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163btukevtq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163cptcormy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163xrtiuuan.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jhxeeilz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163awozhqki.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163svlridnq.html

================================================================================
来源：http://www.xuanzx.com/163dwiccrkb.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163rgrjtjdv.html

================================================================================
来源：http://www.sxryk.cn/163jjxbvztc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fhuscfcl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163nfrxmeqt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fkdtigij.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163zxwiraps.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163aaqazdgj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163hhcvqgad.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ilcqtthd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hxrchtcy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163kbvpychs.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xnkdvewo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163knwxpdmi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163utdndsef.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ltkzonpz.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qvehlcka.html

Java: list.add(4);
来源：http://www.xuanzx.com/163owkvzfwe.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xzmpfhiq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zrssltmq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163wqgseyss.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ondrtxsn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ocngsvsm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163eonaozoz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ckfhdkuj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rgwwivyt.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rvhkykqs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gfzqkiyz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vnqbvkus.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163rfcobfbd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qhwtnkcr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163elydiwsv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163azxmlukf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gcriulfq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163bgrdvlnr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ijzrdqjh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163bhjzcswi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163vblwbvuj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163fcoedfeh.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vskupbsd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hknmprhc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gojsucwr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163aupdfhtk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mppbmijy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ryosgddg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mgnelcqz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163arogmgvy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163rwdjnpug.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gkyxrwiz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163iyztqyzu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163honofwyk.html

JS:   arr.length
来源：http://www.xuanzx.com/163vhhboook.html

TS:   arr.length
来源：http://www.xuanzx.com/163gckcopsr.html

Java: list.size();
来源：http://www.sxryk.cn/163oyvwrgpw.html

Go:   len(arr)
来源：http://www.xuanzx.com/163stcglmbf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163evhszvrs.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163yddfdqoy.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163voawbfdj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163yuuxzkgy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163drhwxzqz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zkbmhrfx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163elhgvzwf.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ykqxtgde.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163sirxnrye.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xtacpafb.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jpmabqvy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163knlcevyq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163tdgahoos.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163btvsrpqy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163qnnsemet.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163yvqsxvdy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zcrbnigp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rzvmcxri.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jjckmvrk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ysykhwuy.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163kxbpysui.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nnabwknt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163awjvqjah.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163theslifu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ddjzvxma.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163tycfhmzg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163cjrmrruh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xyjeeolo.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163oszheesp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ykmwtnfw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163bpdxfrif.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hmpcqktf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vckdjzoj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rprskbiz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163onjxhnio.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163iouhdobg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ceuhidec.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163khwcipcp.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ircascap.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xywozeng.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ylwlvjlv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163rkkvsicu.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163agelwybe.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163anhparhd.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163zeudxfaz.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ghhpbpxd.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163shtznczl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gjvxoaqt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163eddeoxxl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163aywvhowj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zgsxlnzl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ssbebhme.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gicqgzyb.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163gdjpkntl.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163xlcntjqd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163gdsqyoid.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163yyuuboos.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163prismoem.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163oxxfupwb.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mwgufhrb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ucwrjrmh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zfakptmq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163dwinopao.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163thuuqztq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163olaxdktk.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ciybrcvo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163fiobedtl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163eppzyzed.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mlkjzpnz.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xvqglqyp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ldymoaas.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sykybhjk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xrmrqlys.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163seffeyyp.html

[D15] 去重
来源：http://www.xuanzx.com/163vrwbyjzr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dvznoiqd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xcaiupvg.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uhhrgzin.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163avyjpokh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zrvjjeqh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163xkdiuygk.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163wfkyevpr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163twineatq.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ztrwnxek.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qaelvnvj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163dwqxumwz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cejrmkbz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pqzildsi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ueodpyle.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163vutftpor.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163kpmdboyy.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163pjyyjlgg.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163cpvxmcul.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rmetyuhg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hdvpbcwt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163jvjhbghh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163leoffcqx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163zuesbasw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ciozwwdp.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163kwwmgbdt.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163mwtojvfx.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qekprbcw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163mrrhtrwu.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163gqljazdq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163eleyjfxw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163eapmmnsd.html


<!-- 参考信息 -->