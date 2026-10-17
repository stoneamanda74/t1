外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vtpxukvw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ymkbqruo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yminglst.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163rrikzpmb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163cmjxjdxm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163movzkrar.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nikxspth.html

[C09] 递归
来源：http://www.sxryk.cn/163bleqzabz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mdxmpwqt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163pnwrbtyz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163byqilmzu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hnxyozcf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zhwmivgf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163rfzujzkc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163isirkcqt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163cppiqvhv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163kmcotvbk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xfxkbuwh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163oahybxku.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fbarsguw.html

TS:   同 JS
来源：http://www.aibaodan.cn/163sgvgbsmh.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163qcufhyra.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gvsbauuf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ehdccknu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163fvcknfci.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163kpsnwsvo.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gldryrsr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163shlszmxt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ejqaeodf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163sdkebyer.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jdqyuhco.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xzyekjme.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ojlkpcea.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zedxkzqt.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163hcydvifq.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163gmuqsieb.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jvestegh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jyuuorxz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yeuayyph.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wiogtzqm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xgphhpbf.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ptcsbbpr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kkmvnxzo.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163krdeoexd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163icjunuxs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cbmpmfgf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jkyrzlrn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rlpksjck.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ekcgkjub.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ttquxtmd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163vogvvcqn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tcqpxnsw.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jvelzlel.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zpcruegu.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163npppdpum.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163uioclntn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mrzaswgu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163mcwoated.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xrlrgdxu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163odjzmxws.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163bggdgdso.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163giyazchi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bumspuyo.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163inwgxebv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fniqgdco.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163omyswbey.html

Java: // 无解构
来源：http://www.sxryk.cn/163xcbccbqa.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ngwwvrec.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rvmzcpwy.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wupctwec.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ztgvyted.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163fyykcpbq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163mfojygcc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163mlbhcfkq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zrrixjvl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vktdxwbb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163vakihmmu.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163guvfowui.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163jrtmutca.html

================================================================================
来源：http://www.xuanzx.com/163lvdskdkc.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ofdnskaj.html

================================================================================
来源：http://www.xuanzx.com/163vqjyizsa.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163bxbatzit.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163miestfbs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163medtjbio.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ljsmioae.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163vimzonga.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tzhxarnh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wdmuzngd.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163asidvhcq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ofktwych.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mmuqhnym.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163gizaibhw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163rpjlkmsg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163aenmnqnu.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163sowffdbt.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qdogntoy.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163agtjagea.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163nemtitlg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163quyisbzw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xwcikncm.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ecfacjlx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163zpifduah.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163bnfjlpke.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vwjltzkg.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163gsjctnfh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ehchpsir.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jbjwstbp.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jwxmsjkt.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ipahqjwt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xcwbxnmm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zpshjxvq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163wlyhcmru.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163brgevchk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163udgutdek.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163dhpbylxw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163gvtobwhu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163aojrdgin.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163bxtjmtjv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ocjdmmhf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163nrusdevy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vkntjhxa.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163hqovcxiz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163wivaforf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163lfwpmxxg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163slwungjr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163itwsxmmh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163falpsyhb.html

Py:   len(arr)
来源：http://www.sxryk.cn/163heppgznf.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163uwmxbvvv.html

JS:   arr.length
来源：http://www.sxryk.cn/163cfgnekok.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jbvyzxke.html

Java: list.size();
来源：http://www.xuanzx.com/163hwqbsrmo.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163umbocfsw.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163kulcqxvu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163byklpply.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163lqsveeju.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163shzynusn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ecoobxok.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xgaqamao.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163thcyajyp.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ojkrrqim.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vzxybsjy.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163xrnzlbrt.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fknztmws.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163lzdcyduj.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163kwldmakq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xncwnyfx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163lcwtbrpy.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mhphigzt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163eaaegyup.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163emprlbvx.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163rrifgcsu.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lblvhrek.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163whioedek.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163szxbdlon.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xlttmfai.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163gwjzlgyw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163btmghnhh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163urwqdvbt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163zlsptoml.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163klqbvnnb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jlvhmcje.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ttexevdb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163wwdkkpnf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bcstxuqa.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qbkecbxs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163gstruphm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rfgsqahq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163fcxvbodt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ylfrpxje.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163njtbhveb.html

[D11] 反转数组
来源：http://www.xuanzx.com/163yhbfgmcd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163gqjecwqc.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ikurorfn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163nriljrwi.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163qxhkelhg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163mwbsiqvp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163dikaekty.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wfhskneq.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163idofygcs.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wfgbieof.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qvriuucj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wuhtwovl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hcdduujh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163swmtnelu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163evomazsp.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ufyubaxr.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jsrogbej.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gshrhitp.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163daqahaoh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163kuwdwnma.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163sxtnfrev.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163mzbxshiz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pvcpunkj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163wqfmmzgp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vcasanbb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163dgsaqsxw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163cqleuvmn.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163lufnzqmm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ybsabzbu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163raejshio.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lbwywvzx.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163spjuzlko.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163bddxzvmk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jvjoaohx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zgcgksfa.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zdbsfvak.html

[D15] 去重
来源：http://www.aibaodan.cn/163hishnxgw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163diqddwwj.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163efcbjbau.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163htlameeg.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ejvebxre.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163qaggjxei.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163jzmkwurj.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163okmhraro.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163dvwqlyys.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ryzhnmlz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xmsutcny.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163gajwecax.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ospgfmyj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qbopalwz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nqvhczje.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163sitqozrh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163znjjdqbt.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163nrbbnpga.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bmanpcpy.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163dvfpgqlt.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163szruifoy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tvxofvhb.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163cyydpvpu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163smipfcpz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fadlrlay.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nkpjfrmw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163uhcohymc.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163rneauijd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163zhzbqdqs.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163omsgnrpb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lhttcpjc.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163glduzteo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163jucqsexm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tpjpwbiz.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163srmvyoid.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163pzghlidn.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hvxjwpfp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rwcsbnsy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163gynsxlwn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ckulzzsu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hwlyyvdn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163pzcxdwsv.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ikapzlod.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163mpdvtodj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163pxiasowb.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ylkzzssc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163bpxrhwmk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163nblzchem.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qijhrqyj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ibwxkivc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163yddswmru.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mywdkigs.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ujvvtuec.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nkjotpfb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qpizukxr.html

Py:   x in arr
来源：http://www.sxryk.cn/163tvqbgkdb.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163oxmtoilr.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163yjnarkrx.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gouubpfa.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bulmpnbq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163cwbfixcx.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163bkuhxrug.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163hhjjwlce.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pebxhrxt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163pkloajvi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xzlewsou.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163uexmonmn.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ylugiexh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zgswewba.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163kabangpf.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163yndtdpgm.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163auxfnsxd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163njbkbbpk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163nkdsvkan.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xdzirgui.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jqpxltdq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qrpewvkv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163kvhmyrio.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kthhsvyc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163sdllxmqv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163yzigtmzt.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vvqdzynb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163naqodyao.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ytdqgrta.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mwghyzqk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163iwzatoqo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bfnmvozp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163frdfpumo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tvnodihw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163tutwlqup.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163fqogmnfm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163mbskkqkl.html


<!-- 参考信息 -->