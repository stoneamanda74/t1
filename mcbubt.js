外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163xgdrqirx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bowchlpp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163baxklssa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lkrrvdhd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163domcpvwv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ocvbxztn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163amylrujh.html

[C09] 递归
来源：http://www.sxryk.cn/163etjfthhm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163duioaema.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163szsdvpgg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fmxhryhu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163opbsytsj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fnithypl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ptigtnig.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163psvmofof.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ejxpkakv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bmccznwg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163auyxwsqp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163myfdrhcb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163cpcrfnnn.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zqsgbueg.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ldzxxkqg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163kmrefjik.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163qgihphbv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163yihohqgd.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163yogjhhcv.html

Py:   from module import func
来源：http://www.sxryk.cn/163yttzlyye.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163llvjcotl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163mbiuyuug.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mcalpktj.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qjjwnwto.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163jpvjgpyv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163xwemnjcg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163haijylay.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163pgapmmqe.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dxgwlrix.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163zyqfkyew.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vljpvmis.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kqgmntji.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qhzqoqlc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163whtmzsge.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xhdznmoc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163axgsfqrl.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jixiejhe.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lpaduamx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zztjqiaw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ucturcfi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163twerazlj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bcbiqtus.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163qbhvfkfp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163kuvmzgvf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163azfxuldm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163oiqydlgh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163waxcwaod.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163vdxilnec.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163hnrklwdn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163kdubbpom.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163hlbkvgoe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163yvfshskr.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zxjcxuqx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yhyaswqc.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163uxqyhgps.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163bouaeypd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163xdswilhh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ugngviuj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dhfbpggp.html

Java: // 无解构
来源：http://www.xuanzx.com/163hzimwnjj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mmitvfcb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163usswclze.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163nxddjeet.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163dpmquuhb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163hnihhzwv.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ijwduoey.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bisinnnq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163jdrcqbjs.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qlrorhjl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163zlyvrdjj.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163hfxizjtl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rigcncxt.html

================================================================================
来源：http://www.xuanzx.com/163pgqywcrn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163hyhxksma.html

================================================================================
来源：http://www.xuanzx.com/163twvyrche.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163liedrqzw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163jpznxmbf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163avfvryoz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163pqeawaey.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163htzcdcgk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163zuyuopkc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xyxipgpx.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wlfqwiek.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163uxrfpduc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163fzbqdesl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163qhqztncp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ymgdtsgz.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163twjgrgcn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163pxzaktyd.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163kqohyrid.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163owvxubni.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163xybcivxx.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cdsyqehv.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ejsizbzd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dvsdmmoo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xjaiyoxl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163moissvho.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163bbbcbuuf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163insjtkny.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163kooibddy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rfcubbkt.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ctfkeesg.html

[D04] 删除元素
来源：http://www.sxryk.cn/163khicrxvm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163spqnvnkf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zmevsfvk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163kiyktpdc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163auvyexfu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gdhnecuf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163edgvxoty.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163hgrmxmqb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163itxifdtt.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163pcyanaeg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xwfkwhjp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163hquzreon.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163pqmvwmux.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163dseruspe.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ltjvckva.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163cqejwewc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tvbruqkt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163xbohrssk.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bipgoeux.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163igkikdwu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163xqbsewie.html

JS:   arr.length
来源：http://www.xuanzx.com/163mkyocciy.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ilbsvqzz.html

Java: list.size();
来源：http://www.aibaodan.cn/163wyieivkt.html

Go:   len(arr)
来源：http://www.sxryk.cn/163kqpckyvv.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163hunxtfoz.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163tqvxmfda.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tltqriyq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fzphszhm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163wzbwvtrh.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ogumeobv.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gnyzusvg.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163spxkufvt.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163awzbjnxj.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ucxxwert.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163xoxeulzi.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163niealzls.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163kdvbwmmh.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sbgoivzo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wszvktga.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163rwewczbs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ladfjpim.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zgnvrnuq.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ioingaba.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rnsoeohe.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cqfgheqe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lcihmayo.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163jgullyno.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163cwoothbl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163yypwwzwq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163cysjefvq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163bpkziohu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163safeshsm.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163didemgbg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163khmrqlyo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pcjcytnh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mrxcgxxp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163owtqulqi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163egissqhb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163daqbqeaw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163yiyxfsdz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gwlginoo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163expanxzo.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rzzsjspj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163rcpswhoa.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163tuebokgw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kblszgtx.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163hhkmmonk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163lvradzmh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163sufxtqzh.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wcrfhdrh.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163foxjhrxb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163cscmycfz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163cxtyotnt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qzwfpjlv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163sompgcab.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163iywkikcy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ydhsqwra.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ruvfseqe.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wdncshzr.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163hqbytcoz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163mupadvik.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163iupjhkis.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163eqpaokim.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163svwqwsvh.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163knmuhgps.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163apaikqgz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163oigiymei.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ymkarfae.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zwoqkexe.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163okjycrwf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cdrljric.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163baehmugi.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nnskczkk.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ksogqlti.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163wcxkjzeb.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zqfvmpnd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163trqwmmsb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ifqvcmyw.html

[D15] 去重
来源：http://www.aibaodan.cn/163yxaqpqum.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163cmjtevkk.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ovmpkvnt.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lbviutab.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vyviocih.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163yhcjyhws.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163jkesxtsm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163mmwqzsib.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163igiidrcv.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163cjpwtybk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163oaxciize.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163mrxqesne.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ilbsholq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bhtqemcj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163zczzyvrv.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163xqabpvpx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rccvtgsa.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gzqquuyb.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ybkqjedc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163tgqxdcpm.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163bfrmoawr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163qqwfaxed.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bfduvdsz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mpgvjwfs.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vkutqbqt.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vqzcxmlq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163fllsexzk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163nnpkuhzm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163nyistfgh.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wvwtvunm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ilyryhuq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163mcvmsgzc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163owbkpnqv.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163hvubpvqu.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163blvlouwa.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lmdiejws.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163krqezwgc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163akkksclz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vaxpfjkw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163wadtqmlr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163skleahpv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163qercrxgw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163wfiukjyt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fqabxzlq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163tfircprj.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163bwzyicvl.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163mgxinkdd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ezbgrhyw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163muirrduw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rvpriauv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163cxbaegld.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ojpumkac.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lwkhqwme.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fbhoctia.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163anfrkqos.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nwjtjfkz.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163giqnwyqq.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163tibindlq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tmvtgoit.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163zsdkjppk.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hhukunya.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rdtmtpxr.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163rhgxlnbk.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163vmqmyxhi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163mbmoxlew.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163gjhtcyxj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mrjpxdup.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163cwohwikb.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163sxtkftod.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163spzuefet.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163mybaabls.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163shktmiob.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163hdytvtzy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bxnfxjnk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nxkntiqv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lxquznht.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zjofklmr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163eaitrjum.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163atcficsk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163agxxmoka.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163olcqmlmz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nanyrqsi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163kceilgok.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163aesttcmp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ptlenvxo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163dceqbhaf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163vamjsbvx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163cipazgot.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hfpqtujm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ahpqcuya.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jggjxhuf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163nakwvicv.html


<!-- 参考信息 -->