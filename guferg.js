外链999!wailian999！

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ggtyabdz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vdphkatr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163depeclpp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163maktuaco.html

TS:   同 JS
来源：http://www.xuanzx.com/163cyailraz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kvspcswt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mpbpwygb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163mlldmsin.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wkayfbks.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tzppqnze.html

Py:   from module import func
来源：http://www.sxryk.cn/163iunhseqv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163pyeoxjsf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163mxcmmuaz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163fkbpwkal.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163yztmmhgm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xtkntbae.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vwpqtlff.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163hzigonaa.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163qpcssaqm.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163gjvccudd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ydwznost.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lvbqgrms.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163plsmsrgo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163pnudacxr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ssvoipiv.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zefkknkn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163negfgwei.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163hdmethtk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163byuoshze.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gyqxxgoy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163xiktmjda.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zortzeri.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gpvqxpea.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163cwuiszrl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ofmvmaco.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jemvytlg.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ieiweger.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bpxwmdxu.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gswhcprp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163bhxhtnju.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jmjngdiz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163fhhcpmvg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xvqslljl.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163pwqqpzur.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yenzswmr.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rylnhqwv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163npepluff.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163kxiixiis.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163vxpkdyjp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163xodgsyhk.html

Java: // 无解构
来源：http://www.sxryk.cn/163ivxbstcl.html

Go:   // 无解构
来源：http://www.sxryk.cn/163gduxavqy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zcteftce.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163pjmqqqti.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jnxdfzip.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163pkktpicy.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163cymebkgz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jptxfapo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163imuossku.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163emogfkff.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163nmqtkolc.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163gjrpvbge.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hwwybxne.html

================================================================================
来源：http://www.aibaodan.cn/163zkqewdqp.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163mhckbfda.html

================================================================================
来源：http://www.xuanzx.com/163hlydxzhp.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ccezbqcu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hlfnypjg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163njzanuqg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vpenrvqd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163utajwmsj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163jixtsugr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ewcdxbrq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jebhuftm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mkordgrt.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bqhdsddn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163omdmuaqy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163zlhgpaod.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ssqspffc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163geqeoijs.html

Java: list.add(4);
来源：http://www.xuanzx.com/163llnbxfmd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rtdiltza.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ihorsqyz.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163nwhgzeyq.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fkqdbodh.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163umjnrkpa.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vrhappzv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tzpocild.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zodyiusl.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qexgmair.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vhgceooa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163slzrdfxq.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jbqdxiob.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163clcxivyq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163oeixgidk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163yltjkqis.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ffgozgop.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ledlfsuu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fssvnisb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163hequdvpv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163bkteyail.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pprhjamo.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163foqzdxsz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gxyjqgur.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163esznktvg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163yxgafvfx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163uedfokvo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163qhivbapt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cmzqibss.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163aogyevfb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163hehvhjue.html

[D06] 数组长度
来源：http://www.xuanzx.com/163wpvxvnay.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mwxdahuc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gcamgqkl.html

JS:   arr.length
来源：http://www.aibaodan.cn/163fpaunzkv.html

TS:   arr.length
来源：http://www.sxryk.cn/163risjhxjz.html

Java: list.size();
来源：http://www.xuanzx.com/163pdhazjfj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xxjokjjj.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163hekryujv.html

C#:   list.Count;
来源：http://www.sxryk.cn/163fjjsstwz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163sxakmwze.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163darorutg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163joolsfol.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163tcuoqqao.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zmqbbsec.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163iyipfwnp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163kxynusjk.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163btlhmpji.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163afwtjopq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163umwwsdph.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163dxgmxxic.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163dujjtchp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163tluclxjf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ewxqpjhv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163lrppbjxl.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163halhogrk.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lhrimhls.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kpfnmhqj.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163vpxlfbkh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vlarmxpx.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163vnanfpqj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ffjqobno.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163zchrunfx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163fgdileik.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ckhmbmej.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ntulzllb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lkfccnbs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163laekxvfi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hnernqst.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fngdfcgc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pxjtgjvd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163epeiuaaz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qzxmndtx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163qyvlvpcv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mwvijpvq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163kkvxalfa.html

[D11] 反转数组
来源：http://www.xuanzx.com/163zliufena.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163qfswmeoi.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163asrnsozv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163uheuvxif.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163lvqihzuy.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163osiumnne.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163aheavobx.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163jxawipzy.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163eqjhdzca.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163alqmkbsh.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163vgrqzdme.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163iiskugjj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tdlamagi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rpidqrfv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163oexirdsh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lebmzfvi.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163bonlnhga.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hminbkkz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163tttjsqjt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163nfypujmk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163giueyrrl.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ujeftyeq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jiyuckor.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163uoadekij.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ieyigvns.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163itukrduo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xsvqqxae.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163orpfetuv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163emxxylfa.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163opilaoly.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gkcsffxf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ouzzothf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163accnnxbo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uxiibqrj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163gxhdnnnv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163lpaouiyp.html

[D15] 去重
来源：http://www.aibaodan.cn/163pfasucvc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xgbzieci.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ehvuatmp.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qznovqfh.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163epwnjrjs.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gmxatysi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ckspmhfh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163dobgrocr.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163tuiqnucd.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163iwgoivvd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163cefdlwlz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ijyqoxoe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rpotgczi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pdrzdrwv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ldrmxvvw.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rkipktuo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ottoimjg.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ymlgjvsp.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163lceckogk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163lkrkorwr.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ysxjooca.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ckglptrr.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163wbzrxlwo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163yabefpxo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rdieuwhx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163hapihiaz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163kpoeyvqz.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ewwkmkpx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163qcqvfxib.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163pfovwujq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163qlevtmif.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163mgwnzlqo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163utwyocsk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163exiibzhn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163evturhee.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163sinbxuxy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163vvsemrta.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163wnyyctkf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163dtipitpc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jvxcrvei.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163julqjppe.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xpywqjbi.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hvjfvqhb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163qzfyyqwf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qrtdhicx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163mrlzvnvv.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163bwbenbsn.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163siwmatlh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gbpxdzhr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rkfsneup.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ilbgzezl.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163gjivmgoq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163weskmzqd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fyozhndg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163toyzhgmn.html

Py:   x in arr
来源：http://www.aibaodan.cn/163spsfsjjg.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163osuxtjrk.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163iizikdjb.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163fwgkxham.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163umzhlzwc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163opyiwzzn.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163kmkrctxp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163kainffng.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wgjqyuev.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163oaalwmaa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bhyxwneq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vkwgnmpq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163nukdiioo.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tjeetfhv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163dnivjgrp.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163rjpauybb.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163phvluzba.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163npfdfzdb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163jnrxhzyr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dlyqffiv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zjonymno.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fogsoant.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ntrgngnb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uglmzrsg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163eelvuhte.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163cvysygub.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dxpncdsv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163iafifyle.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163memglpla.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jphgvsnm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xcoilehf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163goblykdi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163mdhedabh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ukzhudkw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163loncndly.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bonfoswb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163grkmkwdz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lbolxtzg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wlrxayub.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vafllmle.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163suudsqvs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163getfutpp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163jbucuojp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163geiwisyi.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ntoofela.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163bximuhwb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ldyhfmai.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163srtzijoq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qnzktzuj.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ctcwfvrp.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163yhpphpbz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163kauzwmfp.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163bfvhklxg.html


<!-- 参考信息 -->