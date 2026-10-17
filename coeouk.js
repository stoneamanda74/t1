外链999!wailian999！

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163wylookfw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zuowqkoc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jbgrhfok.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163nnydfxxk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ifnqtots.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jnpfsovu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163iirvtamu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ijtwclfp.html

Py:   return a, b
来源：http://www.xuanzx.com/163qwnaaubk.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163adqmkshw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vsubmisr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lmdzcyep.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zqkarsjc.html

Go:   return a, b
来源：http://www.xuanzx.com/163xekodabb.html

Ruby: return a, b
来源：http://www.sxryk.cn/163lfgysdpq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163spayfwhm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163kwzpeuqr.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163sfaqgtsu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163dvtgjdnn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163perukmdl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163rzlxhawo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wmgvftwt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163hxsnssqr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bhgpcawz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ppawvpyd.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163njltholc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163gaexcplz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ekloeqvi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rdejqrke.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dzmcqkpo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163rbgnfxtr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xdcmdhsh.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dsuwuvjt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163smjooiyb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kootieeq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163sujocije.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163smdolgyt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lcnejgcy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cdibekac.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fteghlsq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qjrlmrws.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ysdcuttr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zlcrqxym.html

[C09] 递归
来源：http://www.sxryk.cn/163zfehqglq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163kyaqgwvu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163stxmycew.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ujfkbdbn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gtmjkqxs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163hxboqcje.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163yzlyurhg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163eqcdsvqa.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163obysjfyt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hjyhjlnl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ctmdcmmk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163jbjgsxbs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ogirptau.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zduayyrl.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163hdlbxsue.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163koosgpng.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163xsaaiwwg.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163hvrnxnmm.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vmgrwiul.html

Py:   from module import func
来源：http://www.sxryk.cn/163bffhzriz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163lhtbfpxj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xsdgnaen.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wlbjemfz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163romnoihb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ztygrbzg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163iialctmw.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163xwvdqqvh.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163cegoneij.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163fsgfkqed.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fflsebxr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ksjhdtlz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ylxgajyq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163efdyomac.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163roomrgky.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wgjusxgs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ybgpycel.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163nwznbfwj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ibjamilk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vkcktxkl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dizhhswm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gsxdlsxi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rqpqmrki.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163vscpdhyz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163okeqiwgj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163njxahjvt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163enzrxmok.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163orkgbsra.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163pocbdezk.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163wdifdraf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163nwjhbqeu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ozuxuanv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163gicixhed.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jycxyzeh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163unwwuhbr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163mysdizaq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163lwptuwfh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ujrajdpq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163wtdfhexp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163gqzmyytn.html

Java: // 无解构
来源：http://www.sxryk.cn/163pdbbnotv.html

Go:   // 无解构
来源：http://www.sxryk.cn/163tqdmkhmd.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163yrtqmbzo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163lyazdhxx.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ulkuitcc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163iygzjohk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163wnogayln.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163heaatmkv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163wrzrdclc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163prwukthx.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ffnhfchr.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zomvnqap.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kdmrxydp.html

================================================================================
来源：http://www.aibaodan.cn/163idmndepx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163drfeoiyu.html

================================================================================
来源：http://www.aibaodan.cn/163pcyesofq.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hhvjjoxq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qkzonrsw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ywuemnme.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163hnybqvmh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163lmxliyeh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xxsvjzem.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gklppnig.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163xmkdmmbv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163lfcsidli.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163mcoelhex.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163krykrqjj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163idulmiqc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163euewspst.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163cyzjldnv.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mofbxtzz.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163yhjccknp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163nefyihaq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163erzianml.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163vhcmfwtc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jvpwslwn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ogfqmfmk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163yzbivruq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163bmhxhazd.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qnnwgqtj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163tqpuzkti.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163foiipwko.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163njzhrycu.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bzdtrhxi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163itkbvhud.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163katibeam.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dztotnyg.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wqhkwtbd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rktcksja.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xbrfwpey.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163buyqjnla.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ryvaapvd.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163umzdxwdb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163niwddfgn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nbmaivuw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vhcnzucv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163lqyzynwd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rtntkdbv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163pruvlmfu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yolbnngy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ykukbvyu.html

[D06] 数组长度
来源：http://www.sxryk.cn/163qbefrdef.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mlmdwioq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163mfgydjbr.html

JS:   arr.length
来源：http://www.sxryk.cn/163abzktrqf.html

TS:   arr.length
来源：http://www.sxryk.cn/163aduiboow.html

Java: list.size();
来源：http://www.sxryk.cn/163xvugqlmz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163idaxwvdf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qycxvnoz.html

C#:   list.Count;
来源：http://www.xuanzx.com/163sjdzwbig.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vauvlczc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ovcgoiml.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163heogbgcs.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163agsvflfr.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gvfascjk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ydyzshxf.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163jwfrudgr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163utiawjrf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163zzkpjuid.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163vvciunsu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bhncwijm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163zlznnipa.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163xkcomavj.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ovwvcbyo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163oqhqlwyg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zusqkboz.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fjlzsqyw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163auaangri.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163drgipmku.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nhbiejhd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xknuchkv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163boxqeitn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163xsohiwhd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163vowkiotu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163fyhwfogy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hjjyvtvd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163pobmnesp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163amwbbmos.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ktfuyidl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dmutgwpw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163oddlnfyg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gakzpjen.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gxicdcpj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163zauksrhg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ajzvvyoc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163vcpybflh.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jtrqytqp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163glfydnfr.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163spaqyvqd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fyuolgcz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nfwosapp.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163sufbsphk.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hnrbpvip.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kjhjmcst.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dcftioxq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163iwvtskfk.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ncjytaje.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xbvavonn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ovykfyqw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bejvogow.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uwcougzs.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163obsziqoz.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ajczdbyt.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163cowtxwkn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163mhiqrguu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ldbvxggz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163quhrgwnc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163omgvtgea.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vncfwveo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xlfsibgr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ozqtdqrd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163bjkhisoi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163rfzogctn.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qgvvojjm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163jazgodlo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163binqfhup.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163eomxlcpa.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tkzngrbe.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163pecuoeoo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lhhqyppt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163usdzgmgj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163twwqkuil.html

[D15] 去重
来源：http://www.xuanzx.com/163mzfzpcgc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pcjxzdla.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ezghooar.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bgqexqut.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yhjyavqr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ncllybev.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163nyoxyrro.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163iqvsvvqp.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rzgxflnv.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163xqaduxiy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163uraowkqq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163pzhnxihi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vwokimsv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rcwxahey.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vuifmqcg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rjwuzwqf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163iywieohz.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163doqyzrlu.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163uiqxwqcm.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163rdtydegl.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zrivycwy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163fsgzzosd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163jvexevpv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163yizgvtda.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163cudhetgr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163xtdtxwoi.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zptaxeno.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xfyegztz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fcmnekgv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163erytdruc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163mffgdzrb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163sgxirsxe.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163yqbzommi.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163yjehyddb.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163jansfeow.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nlunypjn.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rzimwaou.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163gupyolwl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163qylxhhjp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163nrpazjnj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163naszqjnn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163invnrtjw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163wzstjzxy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163wjjaldia.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163rwajzqus.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tbccaqaj.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163purgiprm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xbvpltej.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dzniqrjw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wjivxuqz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ksyzfgtt.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163izvrnknc.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ctrvhker.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163chghyazm.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163nqvctknz.html

Py:   x in arr
来源：http://www.sxryk.cn/163igltvmag.html


<!-- 参考信息 -->