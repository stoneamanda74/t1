外链999!wailian999！

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xfqdtklz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163wstkssxy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163rbiavgvu.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163fbnipoxm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ukapnefe.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163nozckpov.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163bpgotnan.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163agcanvkr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163kylvhvsr.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163xzlduzog.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rzrhsati.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163stpfdjaz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iqxhdxyi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163iddyoada.html

[C08] 闭包
来源：http://www.xuanzx.com/163kdoogdfx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rwseqwgh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xgqovrtx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cnhwclop.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kqomqzix.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163awvrmmne.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ytjoomre.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163nfvilxkq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163stvthpyd.html

[C09] 递归
来源：http://www.xuanzx.com/163jhdcrxlp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163wtoekqrd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rdtzgxgu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ihfvetax.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dzpdtott.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163yybozyay.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163omxuhmhv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163zlitdxcd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ggomadxq.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cgsxddmi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163klveyblk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163morlpxbs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wmtdkmpg.html

TS:   同 JS
来源：http://www.sxryk.cn/163spbghpra.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163qdwscfjg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163juokzdfi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163bdrmstsr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nxtxkuze.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163gepavfqn.html

Py:   from module import func
来源：http://www.sxryk.cn/163lanrfhpy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163oloyecwp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163rbfbwcks.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163fbyzfjxj.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163twyqsoqj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163jstgnxzl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163pkgufgpk.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hmocyvod.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wmvbwmcw.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dqsuthiq.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ugjwurwp.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nkrpmzlt.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kbzanwzv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qocrjdwk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163lekrghze.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pcyiubaq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ymtwlrhx.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163psydihrl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163zbnthomc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jvbcncqj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ggvcowwh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163goyffxnd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qzeubsyn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mofjnzsz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163trngcqew.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kpzbyqlz.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163hnzrqvtl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xlxdgjcq.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wfzvzlvf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163klybvfch.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163vngncxbr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163dujqdtmx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hyuuvmbw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wekgofgc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163fgxfhein.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163okbjpxcy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wxmwqqzp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163rvvxxlns.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qdbljxul.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163fjxdoroy.html

Java: // 无解构
来源：http://www.aibaodan.cn/163aqmonree.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ciukmstb.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xeiefofs.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qvierqqb.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cnwhovua.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163jgzuzqds.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163irfnkzqd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bacmrmqc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163hpucalmp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bixaifba.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163decabvei.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163wphxzdaj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163oiabcilo.html

================================================================================
来源：http://www.sxryk.cn/163cuyauxdo.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163uylpgmdm.html

================================================================================
来源：http://www.aibaodan.cn/163bwcnegbt.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163nmzmomam.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163hjjcqwpg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163sdpqjbyz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163deltvdxr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163cpjmanqi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163julaiyqi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gktlfrio.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163gctlqgch.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ebijwyco.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ccpmhzvc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163lhkfonug.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163lqdbrgva.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163monimzwa.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163sobiizew.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tjiwqrxf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163flnhlshf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ntderrhg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163vjfrdxky.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qkszgsro.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163baxzjryl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163pyjbvolg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163wwaeelil.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ciqkfqux.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163iwgkszvp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163baiadlfg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163mncpgkiv.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163bpkjovhh.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lxhseiwg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163akvnktqc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ffoznxbj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bpbosajx.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pornfddo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163bafltbag.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163unxphsil.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163sqmtgjvk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bdymbyvq.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163cpjqhtti.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gzlirrao.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163nsigobfq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pesegxsu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ifoeboud.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163uuogchja.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163moekxlng.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mvviwfrv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163tdrfdklu.html

[D06] 数组长度
来源：http://www.xuanzx.com/163eufqxavp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163prghsqhw.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163hfchaaxz.html

JS:   arr.length
来源：http://www.sxryk.cn/163limuhptq.html

TS:   arr.length
来源：http://www.xuanzx.com/163mrlzczwa.html

Java: list.size();
来源：http://www.sxryk.cn/163nfeskehb.html

Go:   len(arr)
来源：http://www.sxryk.cn/163gitguctq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163oypwvghk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163lopishwu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163cebhvuhy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163hqgwewvb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163gahzklfk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ndnbyrhp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yrywaalk.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163mphmsznq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163dgkefuib.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163whggwnnc.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163omoiulbp.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gjkbribh.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ibhdgycy.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163tnfwcsio.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jjhxsoae.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163nxnvgoor.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pdfmcycl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163zquarblt.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163cbtathms.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vaxrehkn.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ngmfqrqs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163neqrvssj.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jcnfmhiw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ptbbrvaf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163mwpkspue.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163sywrqbsd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gwboogdz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fpwrycjk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163asytwpdc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qntrbbhe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163pfjnczcl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ylnlikma.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wfwkkein.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cmlnazvm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xzextbig.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163bsazrjbf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gplhtxef.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qbkvukzn.html

[D11] 反转数组
来源：http://www.sxryk.cn/163dscgvinm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163auisgxxl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163aoqpekxi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163itslwroi.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xvcqfurx.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163aikvvxod.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gwplduyu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163taxbwxtx.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vtwtkvmt.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163lllrrcmn.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163wjiakemm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rkbiegvb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pqrdkqqu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jkjyyluo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163xglvdhvf.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ryktdtuq.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ijhcttse.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163iwxydjrr.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163qjufmkuk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fuihnzqm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163etmltavv.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kjaueljq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nfotzyud.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lixdswyb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163uimdmzyn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jsylcloo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163hizahqmx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163bykcmxhw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163orwurgsm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xdowhkqs.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qddxcbed.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hkbtdyrj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163cjaautxr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163cxcjglgo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163oicobasf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163tuxoicjg.html

[D15] 去重
来源：http://www.xuanzx.com/163reeobilf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wovxuggk.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jfzbhtws.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rwvhbfcm.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ppxajgbo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rcfbuwwo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163xypyuvte.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163yetpnexl.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163luvmcquj.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163hdhadahx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qpgpabnk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ghwzfeqp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163losztwpi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xzucetfs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163btibpcez.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163gxdnunnz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163sdonkwbc.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163mgoyghdf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163palseuuh.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mnxkekyn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163kpgywsfx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163xwimachg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163agqtpstb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163daqcrypi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163nvqyfvph.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163aqpoyecv.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163afwnozfn.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qhudbtfm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fcgsnenb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163mscxhmdl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163oiskwpxi.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hgjvouox.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163eiddggag.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ppxcgpam.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ndlxdqop.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163pyhqgjvl.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163bsrlzfjz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ujpstwan.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163aquhkdfn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163kjzglcfi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163awmorvwg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163dpnidege.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ccqcgrbc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163updsmpra.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mdcyfwfl.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163mvujetwk.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163klnsjfcv.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163fugizjnj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ryudycwp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lrvdbbmw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163zfnmtxuk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163hvpddaee.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163hnvnjonr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mimzptah.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163hjwgkjxc.html

Py:   x in arr
来源：http://www.aibaodan.cn/163heaeiwux.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163bghiimlo.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163lpwtsshz.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ljavfupm.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163chleycpc.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zsugxbry.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163tvebpyzv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163afztifue.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163zljqnwtt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163okhwfiih.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163kiddfltj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163rhdmoxwb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163wxbbhtki.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ubuujuit.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163berztsws.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163nrfzuovc.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ejsknlor.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163gqpdfacy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yhahjrka.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163yaltdudf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kaomstat.html


<!-- 参考信息 -->