外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163pxdvovfz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163xlvjegfa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163swmwosmn.html

[C09] 递归
来源：http://www.aibaodan.cn/163rhieozcs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mlvdwvys.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ywjmrmpq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nkiqcppl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nhgcgzus.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cwnoowfh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163gkzrvsap.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163omhssakf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vwlqarvj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163flpmoakv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163uosyvvpv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163lcuhgkrg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bnniiluz.html

TS:   同 JS
来源：http://www.sxryk.cn/163ariwkcaq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qfrwaoan.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mugkqoyw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163mlgcbokt.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vxyxaowh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ohmodojt.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fpngcnbs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ziejikek.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zmvbnqfi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163tuttkxku.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jbtsxwne.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163budzhthi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163chgtgqfi.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163divxiidl.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xtpcmlsc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163dmdhvzan.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163fpthojpg.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163exuwbdja.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vfmmrspb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163crfysnmh.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fvnvnqxl.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ncmnioxx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163iitlsczl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163vfbgxccp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163jgpbtllc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nperamnc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163nlmkiknt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163amfhdnol.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163snizacke.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163tiaosjyt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163cjmngqqa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163mzcreusd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163breqcowe.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163kroyoesp.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163rlksgopt.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163aldxyhsb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163flqsppqc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163fxalpyzo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ymwgarlu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nkamlkkg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ejvwcdlm.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163nkxucldt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ttnvlluv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mtzkcrtz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ctyfqqsx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163szfcouxb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163gaawpzjn.html

Go:   // 无解构
来源：http://www.sxryk.cn/163guodonpm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163sznixapx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vidgnizi.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163cxjkszgx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cznffqhf.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163gtmhwohh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163cqghktib.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163vlahasof.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hnzghpxb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jrltivjd.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163tnhcrfwq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jdsrvjbn.html

================================================================================
来源：http://www.xuanzx.com/163axyxgsqu.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163zsnztgjn.html

================================================================================
来源：http://www.aibaodan.cn/163oluolfdu.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163rvzcxqvb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bitnevvt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163epouarjs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zdkmcjmq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163upebzyte.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163kjgbhnng.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rwtlomwb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163nuiqnpgq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ozewrexh.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163dsdngubp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mahsbuov.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fakythni.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fapsaljr.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zzlsohho.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163jjzqghlo.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163riixzoib.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lfpdwbla.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163foielvae.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163lzhxjpev.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hgjklzpe.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163coivyhtb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163mnemlgvr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rfazxjuf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ydcbrdzl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163upsnhued.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163bazeidji.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ktrdwxad.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163udhwdltf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hwitmwjx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163cjvxznbd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pxvjvezt.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163kdexrxjz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163jshzzjwo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163zpdpcuwe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163fxblhdvk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vtwnzzfh.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163bvkpapbm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rxcknfov.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163wpuozdwq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163iaolgvfv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xmgoevdz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163hjzdzkcb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rguroxmk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bymsywyg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163avsdohdn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163iwhyahdf.html

Py:   len(arr)
来源：http://www.xuanzx.com/163kptxhicl.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163imfnurrz.html

JS:   arr.length
来源：http://www.xuanzx.com/163ylbovowk.html

TS:   arr.length
来源：http://www.xuanzx.com/163shyxbcjm.html

Java: list.size();
来源：http://www.sxryk.cn/163naaxwtuv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163uyxumoxo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163sywviquu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163awynagpa.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ogkqqvcf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163lzzmczro.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163yeipmxqy.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wtswsili.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163cavfnril.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ejyfaixb.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163qfpcbhmx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163mwexqvsj.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163qvjyltmx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163qwohfvdo.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ummfrman.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163veebjqfb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163cyayxnox.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163biuhynih.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163rxpvbbre.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163jrzywrfb.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ahihqiah.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163yyyhrfbq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rjrqirek.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gdhlnlku.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163qobmsmzs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yxigfvve.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163iizbylqr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163tbhpkaec.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qqzbvdow.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163apbcbemz.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163txdidxln.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163jmwpaxuq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rvehhgvo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163iihfkkkq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dcyctqur.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163drqfgqyg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xyrcluts.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ihrapvgs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163eixooilo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163etonejid.html

[D11] 反转数组
来源：http://www.xuanzx.com/163pbkamdth.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163mvocplvn.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ecpxyaao.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yjrowswr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wbosakby.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163sdrynejo.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wuieubby.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163eipmljtx.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163teqxykks.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xhfenkps.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163yzwlaxvd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163efyorzvg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ljnuwxlh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fmexsgiq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163cwcncmrg.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163isgbfvpb.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ejmkaykj.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kcbedsgn.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163wvcduflk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163utnzvoii.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163twxqxgzd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163orairwtn.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dbkrrslt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vjekztyx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bbklcrag.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163fhfdagmy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163plsxcqui.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163bagdwqal.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163snjjxfmm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qdbjwjpi.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pcbrdwvt.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mlbrwyrm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163uihnaijz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163acapmyym.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163enhaqlzj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163fmcoofnc.html

[D15] 去重
来源：http://www.aibaodan.cn/163ixiirmmb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163oaxstqbm.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hvelxstz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163agniighj.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tuvxfvyf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ndvbkpul.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163zofqqhqp.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163gdajiewv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ugbipoop.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163xjqbcmjk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ayfeyhee.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163lqwwkqck.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vacdeavi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tclpxbjy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wqbvtxuz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163xpshqwoi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163aplfwfoe.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163elaibepk.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rcsikvzr.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vsdxqdzk.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163iuwfsyhn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163usxgrbnn.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163mlsduowx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163sybkzzwq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rjwoxnhw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mxhjfzyb.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ntqoxiyb.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ghasjean.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163sbyyxzfq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jujvpsdu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gwrpayhi.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163eyfiegyq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163icxfhrds.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163lrwdezse.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xlmpepki.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163yylvbvhh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ynmhqwjh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163wvpynvvc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163tnqyrgvw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163dhorqgkk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163epffaeyr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xcobtuge.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ymgwkzqf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mkmrluun.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vpreneup.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163uesswild.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163izcafbnd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kuhrkjwc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bzddmqqc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dmpgagws.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qptrbsnp.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163dvmuonpq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dqxwmorg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163zbcvcdrj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ytdkwdtn.html

Py:   x in arr
来源：http://www.aibaodan.cn/163mbvnfplk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163noflbegn.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163pxobycum.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163plqakpkt.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bpdxuegh.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163smppsvlc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163pzceflai.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163yowubvko.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163fvgelhzp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163cfqkgsss.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jcykodsx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163cwcdjxem.html

TS:   [...arr];
来源：http://www.sxryk.cn/163kucmsaqi.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163dsofnfhc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163hdfrmgod.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163krxoqubs.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163icijnxmg.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163erdazbnp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163yoztzstg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163mmjzjinl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zpvkbaml.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vhtegrsl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163jxwjepfy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sbubljwb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xffpxujj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163udpxdwmb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nzjdmnpa.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163kvtozldp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ejvacyan.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163grfrekut.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163kvvcextm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163byknagjw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xuvwjazb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dhsinaif.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wnrrojnj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zlyoooji.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163mtkxvyog.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xnilkagr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163mcwvlgkx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163sbtdrywe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163jpxnnble.html


<!-- 参考信息 -->