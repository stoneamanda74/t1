外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163habzrmqr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ljxkeywk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bvgsqspm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163utsbssnf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xyuanfle.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ganhboma.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163obcqgeqb.html

[C09] 递归
来源：http://www.sxryk.cn/163rgrmabhb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ebzxkbcp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163nbeywjpv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nppkyzhc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yukgumwn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163rnmrgnxn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bztpdaab.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jrydmrbh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163svcaqypa.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lwalnset.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163etbtbqlm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wdajxcfm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163sbrytieq.html

TS:   同 JS
来源：http://www.xuanzx.com/163wfuvflim.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163xvrwiiby.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163wxvtmlsl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qwfandak.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163uvstvgzk.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qqpuvfuv.html

Py:   from module import func
来源：http://www.xuanzx.com/163pcpolhrj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dkzmblhk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ojwvzezx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hfyhkhym.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163yuacgnwv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163lvjjaeyw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wahoarbw.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163lhnrtolg.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163eekqclaz.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163akyxzoeg.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163txykecrg.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mabydbko.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gvrorqsg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163raylgczp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rrhvesze.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163kicbliim.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163dniydduj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163weqwjdhz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163unrwfqyd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bfluwhif.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163cbguxmaq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yonuoqhc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yyzzudza.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163piavobyx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163visozyyj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ndislres.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jyuctqcx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163atxnvbyc.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bymcewiv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163afbjrbjx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163bscgurth.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163decqxshw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ygvirlnm.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163dzjfxcgo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163uiomnjam.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163kbjxdkpr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163hqtjndfz.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163idtzgcsk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ztyjbumj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163njyeldjl.html

Java: // 无解构
来源：http://www.xuanzx.com/163jedevgeu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vqwrtzbk.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163amkjseiz.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163mdxohpyj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163crldbmqs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163qgucbtqm.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163qkvesqwp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163znyubrhz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163yoadmipv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163orfzfaaz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163iebnoiby.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163yaudqbio.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163zkhzhixp.html

================================================================================
来源：http://www.xuanzx.com/163fmgmehky.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cxydinkj.html

================================================================================
来源：http://www.aibaodan.cn/163kxezrodg.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ueimktoo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163pfhiwymd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163rlswgazf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rvobjhcw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zbffernm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xlrtdmhm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163aickumqv.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mepvlqia.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163sadtzzoa.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163yexqlcjx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163lyjgdbzs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163jgdnuhcu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163oljvdpyi.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gwuidase.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rlvcmrkk.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163vuqljvpr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163mbfbubnm.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ahkaepmx.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mzrnfycj.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hfmlhskm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163dxasdlna.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163hbwxvbra.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163bbjlempd.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ufrecqzl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163smtkkfxp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163gizameug.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163polywxta.html

[D04] 删除元素
来源：http://www.xuanzx.com/163owvgreyd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163kihzkniv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163dlfwgkbo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163tmrrhtmn.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163riixrcun.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xnxeuuzw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gmnenbls.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163sxbwjziq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163shhqrrcb.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163cpqbhqkl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uhkeiucq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163jgxavuaa.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163lnhalduc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163eablnwoh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ajllvryt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rzqurdyw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163emmpybua.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163dquffsdp.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gwzcfgvo.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xyjiamep.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163eglebakf.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lpyagqdi.html

TS:   arr.length
来源：http://www.sxryk.cn/163pttwudaq.html

Java: list.size();
来源：http://www.xuanzx.com/163fmuchmiu.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dpvgijkh.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lkrlmiii.html

C#:   list.Count;
来源：http://www.sxryk.cn/163bxrqediz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163qzwrunrw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163eckrwtjw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163rswmklbq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rrezxuwu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xtzwliim.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xecmuahl.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163jlvptram.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dmaxxbyl.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163gdjanipu.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163rkqflfrs.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163kjcpnowp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ysyvhmbp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163duqzutpr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xoclhsbd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163dxuxepey.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163atzrgsen.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163lckvqqte.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wqaiwwkm.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qgzhjbnl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163roovszwi.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ffsgdsgr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qsnmcinh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163qowcrbve.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163eczpqpqb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wfhrqxxi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mbfwkhvx.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ygwlerwm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163uhylzror.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dheavpww.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163nxfmrjch.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gwbodiww.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163amubpggl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163bcvalvlc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xlwwuriq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163eneetawb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ihekwdjk.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mruphlyi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163qeqslywo.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ddxggowo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163uqwsyegi.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163iaezqfed.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qisucjds.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163zmuyqtmc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163djouocqd.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163yartxkjc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ittoyvjm.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163exejdybf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163uopwbxmo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tsrhiglq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vwdoztwj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163twtakyzj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163grftagrw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ufjrxqqn.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163quvwhoed.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bdmpgfqb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163idwrergf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163uzuiosia.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cnvqoged.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ueebfmgq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xzbdrfhb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163gnyletib.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163kmofcfgr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163hobowthf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163omkzixpu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163gefneagv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163yfyzhiix.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iccrfbhj.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gblzhkzw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163iggqpkpq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lbqvloyh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vswnlozm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163owblpoli.html

[D15] 去重
来源：http://www.xuanzx.com/163zsazttsa.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163kvgksibd.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163kvpppwuw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kjvuvnwr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yookpnci.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jydueyzz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qivcpwpe.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163jrnmderr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kzmkglff.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fzsagtot.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163bkvkjonm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fltdsawy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ezvusohz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ooqmlzdb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163hrqjkghf.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163zpheqxyt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163vcssdnca.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163yivnttsk.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163pvvxismg.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163yhmvzmxj.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163bnlahemn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163swcxhcfm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163pzmtxpwq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163wosnauap.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163vpgikrhs.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ojhrwvuv.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163vorefxik.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163fmjqkofi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163dlevwsnb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163duvnjgxt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rnzdunnf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163nipygqri.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vulataib.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ompknapz.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tgbarppw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163hsvzenhi.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163sgcteekr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163gvifdcpy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163fsgceuja.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163tlkbqsbe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dykvryqy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zobgwqmw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gyvyjyin.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163pfuttpli.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163hmzujufl.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163mtasyzvv.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pjvfpetr.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jdbfpjtq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vycgzaou.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vcpmejtn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163psvaxfis.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uvzejnai.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ykvmeael.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qtmotpka.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163srjeuouo.html

Py:   x in arr
来源：http://www.sxryk.cn/163xxngkczq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163svobbpjr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vevrtmxu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jyliznpg.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163yipjmnfg.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jhcvxqce.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163hcxmiqka.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163analtnzu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ertswnza.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163naaftkrp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163dspkffhy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163abovtyis.html

TS:   [...arr];
来源：http://www.sxryk.cn/163mshtotuz.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163khqertxo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163imjmqnmh.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ycsulbwq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ifqnomhe.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163cgopednc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163emgmqyee.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163najkysbd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xpccdykq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vskklckw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gsiwszsh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jyiadqhj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xpnkhvcz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jpcpznas.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nxrcuisz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163seankndc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163cxzerrgp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dwfldgdh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163oksndgdm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163raqlphuo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163pparhxjd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163tmrrgeaq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tdmjoflh.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qxuvbryx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rjevhfzj.html


<!-- 参考信息 -->