外链999!wailian999！

[C10] 变量作用域
来源：http://www.sxryk.cn/163nmklbglm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163guiaedpm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ahnthrcr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fstkrdrh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ohfmxwjs.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163kjqgwkjw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163qlfmodac.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ptyigslx.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163mbdalnzh.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ywwmaswf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yhpynffc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163zqjnaqki.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ymzojpvt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qdhdattd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163dakesbun.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163fyiccqks.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dcnvrsbk.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dvivksmg.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163nhtjtjwe.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qtgspwtg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xmjwtvlh.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xtxlffcz.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xeatvhbb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163luqgdpox.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qdrkqken.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ylfsflzt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163jmwrcybk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ejctwljb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bnyfgpoi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163abfynign.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163rqtfivmf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163oepuilsh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cyxxyfjh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163yepwhhbx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163xziqojxs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163mfsilvpt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mxolykrt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pxvwvapv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163nlgvabza.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jwmctmus.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rpinjlua.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163goaozwdy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vlwoagcy.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163zidvpuzi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163mapsmsaq.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jdzymkpr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hmrboyaj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ikekwemu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163odbokouh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163fombcpiy.html

Java: // 无解构
来源：http://www.sxryk.cn/163ixatfhyx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ktjsabvm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fxbpcazc.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rsptbnnv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163egejtkix.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163czlchqem.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ykpftunx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163hdlyvooo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163eyxovuwx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163phfbyjsz.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163htpkyzev.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bsfvcbky.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fjekkyoh.html

================================================================================
来源：http://www.xuanzx.com/163anifdlyh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ybrpabhk.html

================================================================================
来源：http://www.xuanzx.com/163hltajzhq.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163scdgvqft.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163cprmyhvh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pfhlzliq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163iqhnijkg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163uifeieth.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163nokqexyg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163bkhenxlm.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ychrmypn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163lqopxuuk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163azstyndg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163gztmokii.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163bifiverx.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yifjnamn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163shssunou.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vorzokfj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163detfedpy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163huaevmrv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163spjsfadi.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163etesyeds.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vvylcfdt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dbqltkmf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163mudlnmse.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vbhuagtk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163nvvjhvtb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163seorjwqb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ahhrurhe.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ljsmzlan.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ohktvhxl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jwxkiicb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kchlkuwj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zfvgaycy.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mezhbmly.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163jsrbuwiv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ldbzynmh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163kzqjcvpy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163hydpvedq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ycoobfve.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wxdgdiut.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mvkuefho.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163qhtkglyy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163hfqtzqhi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rbhfazut.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163luwdxcrm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ajzcdmue.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163fbqlgncx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163botgrhvl.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163nodnoeon.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gsgwymkb.html

JS:   arr.length
来源：http://www.aibaodan.cn/163yjwpsqpy.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jzqysavd.html

Java: list.size();
来源：http://www.xuanzx.com/163ojybkstd.html

Go:   len(arr)
来源：http://www.sxryk.cn/163dhrcqhmk.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163vedygjhs.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wbtqiqkj.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163izycvxoi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vkctqkjn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163nhvxnzhj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hqnbbqtp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nyodetmo.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163rkkzljfi.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163kskjjweo.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wyqaggxp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ckzwfolp.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hsetscwj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163oudzdyxi.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163mwgaeslb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163elvbppjj.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163pglxzsto.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ergqewxx.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kbccpkog.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ndoffgmh.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gfxkdrjn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163oekezjux.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fknjpbhh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ozxjtudt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ovwowwkc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ruclrxqh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163lqgbkozo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163rjushbjs.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jfwauclp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163niiysjta.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163xisvtwxk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163gtbxhzdq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163uaogmquh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wfnakphz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vgqjdggh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163kweasnxr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jnrfnylf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rojhkmus.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ltdvuhhm.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163rscpvbil.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163oezjwoqa.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ozwayosc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163eyptjpsk.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163lnzcykcy.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163onkiptjp.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ycqdeueu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163wfwgksqc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zxlmgdmw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ytkigezp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163flvrahtn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dhooxtdx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jdhasgpe.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163spqlshly.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gurasqjt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163iyuncooz.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163lqpokdzy.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163nsaezruc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bymnmfxe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163gklnomth.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ztaxrnui.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xlkkgwfs.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163bbxhislg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nrowfajw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163isvraluv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ugifsgrv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163rxpygqqh.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xlagfpte.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ogeuafpz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163rspaqhar.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pjsdtkaz.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xodeocxh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163jhgrikls.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mgentsna.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xkfzrjkc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163jwahcjvp.html

[D15] 去重
来源：http://www.xuanzx.com/163orrtmxra.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tgwmnrve.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nitcevsn.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163axtojzex.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xljyubfq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bjaktvqd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ywqhnovo.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163kiqzrfse.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163sdigwtln.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uxewtwhw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xrnkcrpc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163tjaajeoi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ntybznmi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lmhualvn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ivfunfih.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163thpszlhx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163cnjzksng.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ozptpznr.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163hajplkda.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163epczeamg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ehthossf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ecisubzb.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163aqvkccvg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pfuuyaty.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163cjrtxoqr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163iyaowjeg.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ltmpflin.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163rgjbzdfq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jdmrpckj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163awbndnwo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163pylituvh.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163admpznnw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163sozxceka.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pwuwrztw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ldmsvkaq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163khbzwupp.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ofdlaowa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163yqmdohba.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163bbnsgpll.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163msvumgwv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pnukxoel.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ibduwhjb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163pmgkoxei.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163heeoteho.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qqmodrnq.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163voohuemy.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163mihxxqfc.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tgplnlhm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rtmcekjk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tbgwblyk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qslfzkgy.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bbufaboc.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mrrjgoqb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ivxkgqxb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163mfcehyck.html

Py:   x in arr
来源：http://www.aibaodan.cn/163zqmprmxa.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ycvoqacp.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163moykabbj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163quuorfce.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163eylbbxxu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hexnxrxf.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163uiwhiknk.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163xvjjwybs.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163pbiqljny.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ispcwrgx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163amyjxugv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163thdjygrq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163mvpujxhc.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163hetajkcz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163fkjwpywx.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163czcdlqkk.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nzhwqpex.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lkcleumi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bprfejbn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163watefapw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hreyfqhg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lslqvldg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163txcotmvu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rgtvbfev.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163izlnuggo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163wsjdyqnz.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163vxlyqgis.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163onboxwdg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163oilogolg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163wsuwgvir.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zhmiwang.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163uablxtld.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163nzjtvuab.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163oxrfkjjp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jviqwxlb.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163fchysdsz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163sbxpzwpt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163krgxeeui.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163koyxdxut.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ewavqgxn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vrwhzmzk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ldjlzuuh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163uqdvbair.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163bnhfibfk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163psxslebq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163wybsxzyz.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163fbvynshv.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nehdoilx.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163athoonpd.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163mmjhbqlr.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qjikqmon.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163iifcjvtu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163oppnszkb.html


<!-- 参考信息 -->