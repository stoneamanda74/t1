外链999!wailian999！

[C02] 默认参数
来源：http://www.sxryk.cn/163vlygicef.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ykzulwik.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163fkubztjf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163kzribxhw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163nbyfigos.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ohedcxgy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ohfrgdae.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163lxvvgvoh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163segulkqf.html

[C03] 可变参数
来源：http://www.xuanzx.com/163qreummaf.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hsdygoov.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163wivdaqnt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ushjulct.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zxvubino.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163goaehewu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163gqfrhfqa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163eyotebyd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163giduyvrm.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163uwyhhtue.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163xudwiccn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rnwnxjrg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tqdtsyyb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163plrcudcb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ripvkheb.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163apnsbpum.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mqhlwleb.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163olafpedi.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163mgyfhypp.html

Py:   return a, b
来源：http://www.sxryk.cn/163qutkwjvz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163lyqnqhey.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163upwoqxch.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163rexlprvq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163tizcsgns.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ihtcqksu.html

Ruby: return a, b
来源：http://www.xuanzx.com/163lmstowmt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163eaafhtyj.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163jlpmtelr.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163dgbzxeot.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ollunmzr.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163lxqpcwdz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163uretqblu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163qgtxdbjf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ifljpcoa.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163deybmtpo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xlubbcno.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163zldlgnfp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163guejtarc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ggdtybfj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163bkycbgrs.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163bishnhsg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163qbnzhwgc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vrnkyork.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163wlqcwlxa.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163nrbyugib.html

[C08] 闭包
来源：http://www.sxryk.cn/163zfhruect.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tmuecjji.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163zhpftymq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163esarnqlu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vhjhyvlr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ngtcmiar.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163rbtjzqsa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163lgmoglac.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kncwbcjr.html

[C09] 递归
来源：http://www.xuanzx.com/163ipysymre.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163jyfecnnw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163aetcxfgo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xtuiozug.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bbdonqak.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ivdvwkpm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163jsgplbii.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pmaczpsl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163pgzgyvbo.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163aimiltqm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ombqbmhl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163nbkqwdrx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jlfljimo.html

TS:   同 JS
来源：http://www.xuanzx.com/163vdlwtdha.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163oossahpz.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163bdnzzsxq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163xqbvmhfz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163bmuanlbk.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hngodqdz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163glekckqa.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jasngred.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163lgvctxmn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163fvhqoizf.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jbzexrxn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hvhngeai.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163nbgmyxiy.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163lwjwapzv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mxqqucnv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xuawuxpi.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gxyoitdx.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hmeuejdn.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lereprwj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163acjcqrka.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kizrwmpk.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163odcjrmgq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163afnqppov.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163vhvlhsuc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lkzpougn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ofdsepch.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163vfrtnzrp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qrbkdcha.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lmvbrrpn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gkqbyjzc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163wfwpnyhc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yeauhrhh.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kaelsikn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163zirrlwve.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163mekspcwg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163txhonwhl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wzqcncmx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zdcjxewv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163mbywcpih.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163xyskloyw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163fahflnsz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wpynxkmr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nanyckne.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fjlcbzgr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163dpvjigwv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163zvdvaibn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163igixmiok.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ccnoonea.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163kfeghozb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163xzxzfyho.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163gdbqgrob.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163uylqybcp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163hseosvcw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163vkevanbh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ikminzcq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163lzsnryjk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163uyviukyr.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ynywwxup.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163lwgolsul.html

================================================================================
来源：http://www.sxryk.cn/163anrextpj.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163vjytrwjf.html

================================================================================
来源：http://www.xuanzx.com/163dgfchyae.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fgfevppa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163laegyvrk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163shqtpqpu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ewrwewpl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163uaerkyxo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163kxvavvqu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163cjrnclvi.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163eyzvjavs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163kknmphue.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163prpvtsqv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163svmyimfd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163lriqtqsm.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dajhomjk.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163uswfxpvl.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163grjsjujr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ndjutizj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wxxaoqjc.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163qmyfgqye.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ugidjsma.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ciebythx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163orqubunf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163wqrxfysz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163qyysknpo.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163bvxodshy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ykixsnog.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jmfduyph.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163idwwnqfc.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163zlcpclba.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163uckeojpm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wdomfnka.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163txbxcuiy.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163fvnqdgdn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163azhntipk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163nlcqedgd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hctaisji.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ofpwjkig.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163nivckpus.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vjsnouzw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mcosusem.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163sexxnvby.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163mrwvtlmd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163fwxxapzo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163wqociwhs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ksptxbcm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163iudebpyr.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163gqygkqaw.html

Py:   len(arr)
来源：http://www.xuanzx.com/163oahgijda.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163japctivx.html

JS:   arr.length
来源：http://www.aibaodan.cn/163alpmalwi.html

TS:   arr.length
来源：http://www.sxryk.cn/163vewzczsc.html

Java: list.size();
来源：http://www.aibaodan.cn/163rfqjujpb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ersoqfth.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163okwicxzv.html

C#:   list.Count;
来源：http://www.sxryk.cn/163abgklaxm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163pamsqocl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163rgqmuild.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ontwhlfw.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bscyrnec.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163anaikkjp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qggcpqil.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xyggcked.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163lsokzxyp.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pphyfidj.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jlwiisjb.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163umjpnhed.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xqsoukdw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163xijbakhr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lsdfsmvw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163uvcfxmqa.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163nhbxwqqh.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163lpadgagn.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163cieysito.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163bsnnsrkd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ydclrpqb.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nqbkmnqn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163sxqpztjs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ehfvpnii.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163yejonpvc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jrymhwwp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bspknlwp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lsxqubhf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163vytebduu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qvurboph.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zsbagkvf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163oakiguin.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pdnxrdog.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163aekumzfe.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163owafpqwr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vxmzmryf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163mrelkwfa.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163vrksvhei.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163acecgygl.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163kgrhvpwp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163evhzxnot.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163rsqnmpcz.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163vqedfqvi.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ecjokdzi.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163bkqnfpvq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163yskzmoag.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qxkdpupy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ztlnejjn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163cdrtuomh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kvoglitk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mojritqm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163glmkckfe.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163xwxsrlni.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163gnhksrmq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ikweiudv.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163iodidcze.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163axfqbhzr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163fbrgwljf.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gqeheqcz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163iqumhqnr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163dntaxski.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163pejpvwlz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163pfmwtebh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tmacyabm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ytccujpl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163gmdmradc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hcwssyud.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ibwlvxne.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qevmzlck.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163acwiqoys.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zjeyefkm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163lolpxlxa.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mdmgbqcu.html

[D15] 去重
来源：http://www.sxryk.cn/163acbqsnvk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163updsjcpq.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163huqiwgyb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bydxmtwx.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tgucstqk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163iojojrbj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163szicjwmz.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163thvzvngc.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163yrzpluqo.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163hsbryedi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163sqtzbtwd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163amwxykhl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lfsujnwf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jxqggkly.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ltpllurf.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ompttpjk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vdowptfd.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163frvqroym.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zfmfmuzc.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163fxmyzvoj.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ehiqrrvf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163agkgkaft.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163abfnuopf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lzkmivez.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ktrjwrkc.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pkvfuzsa.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163yyzqnigj.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163neczmxyq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163eekntmob.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mxmopebg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163fwfdpoes.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nmesxewa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rrscxvlb.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vnuqcntg.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163pzloybea.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jmthnsih.html


<!-- 参考信息 -->