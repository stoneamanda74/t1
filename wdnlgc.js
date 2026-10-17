外链999!wailian999！

TS:   同 JS
来源：http://www.sxryk.cn/163sonurupv.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163pvwbbfvs.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163zrvzfvgr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ohkogndq.html

C#:   块级作用域
来源：http://www.xuanzx.com/163bdaxzdeb.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zahvzghn.html

Py:   from module import func
来源：http://www.sxryk.cn/163dqophtcy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163oibraexy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ggevagpx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cowugioo.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163hbvaynjx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163gtirucfb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163hahtpbxe.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qgaucmoz.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163bqyxjofa.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163abgidqjp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ylzxkjoz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bobytedl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fmztebbc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gekjwcyv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163iksaxesy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vfrmnkqr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163wtokjuda.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163limmucuw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jiwkfnxs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163axmqorik.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163afxngjzb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ssmjxctd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kumhogji.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163obhzfvhg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163sknjstnm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163lluveywe.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163zvebohxr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163eoerpipg.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163kfenuaoy.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163aeujhszs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163umzrkafz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qgsigwad.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163rgyrfzua.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163pyigctxs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163uxpdzazh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wotbvkff.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163lkdtekju.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mnktzbtw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163rjglkywu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163achkcmqj.html

Java: // 无解构
来源：http://www.xuanzx.com/163qujillhf.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wxvflnvh.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rqgqplbo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163licxyrfr.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ddzabpdo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163zqpxtixt.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kkygjoqf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zezlfimj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163dlcjrcro.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ufmgfvqj.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jytfvtkl.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jxbfhaqp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163upfrmwwc.html

================================================================================
来源：http://www.aibaodan.cn/163yfnvyfbl.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163yksmgzrg.html

================================================================================
来源：http://www.aibaodan.cn/163nsrksuwv.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hdzyrmrk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hkacfuow.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gskkgvre.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wmzxozvp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163cqrkfpdi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kyjcpxlz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163gsqdlxdo.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163sfujgkph.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163igloesyj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163hlifcjyk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163tjqftxqw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163oonsiaat.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163oxhyaaeb.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163svoqafhz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hstmmvqe.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tmlvjhji.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163frfuzhpa.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163swqackff.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qdvibpvf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rboudjsi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xxrliqkw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ujcxswhi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ybxjxygp.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163zvawntph.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163vbfwlzlq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ocbfnffc.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163dweguqpn.html

[D04] 删除元素
来源：http://www.xuanzx.com/163cnpdeiht.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163qkypwdua.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ehnedakx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163skkbcbwg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jlphaldk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qmmuwbvd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163afcbfdei.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163raprybko.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163bzkwnnuo.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163kbwrxiic.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dpoybjlk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163gzrebopk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163eaeiiabh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163pomvmins.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163qvkqgfhe.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163stgorkej.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163glyojwku.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163kajsilth.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ekemapda.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163pusfgsca.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163dnqgqvvm.html

JS:   arr.length
来源：http://www.sxryk.cn/163atrvilxz.html

TS:   arr.length
来源：http://www.xuanzx.com/163nyiqjwfq.html

Java: list.size();
来源：http://www.aibaodan.cn/163dybfllku.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vqrnazan.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pyafvvma.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163garndehz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163fkqbuhlk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163aondfnrm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mkiabygz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ewrsjfic.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jffbgabz.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163tnaxnszs.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163wiivghlq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163btgpilyj.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jppcxxdj.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163skoedczq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163kqxtuyuc.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163lygfbaem.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163smzrgtvc.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ygytccln.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163bnltrerx.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163pwqtqkbe.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gvfnqhyo.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163pfbbpnla.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163uerwwkti.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dwlddare.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163sizamtgz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163emtxtlsu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163tdzmxssc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mtkxljpv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163pgicqndh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pesakcfy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163bwubfyav.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wecwviuk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fgfsdjtp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163klaqtzwy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ldzyrasc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qwefncdn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163uqehwdny.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163yuytadir.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163cnnhrzes.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ubxibnrw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ggrzchml.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163payclpfd.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163guolwdwm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ggwajocw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163acoqwmdi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163prqzojkb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163yzggrlkc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163mexdtjmd.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163tubdfqux.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163denueess.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163kuuqphoh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ueqytlig.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rmzzzzyq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ipdcbalp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163iqvrkqbn.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163arhmwbbh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cbotamlq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163nyorposx.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163qjwgltaq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163cpxqkpjd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163okhlymjg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nkpcsjky.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qjeglwtw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163fvtlgfli.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163naniplgt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163rxwrbepq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163vnmalfeb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163mapkpzdj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163xxparjhk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ldkliqoc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163viitfrag.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163oygeohnd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163virfkkry.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yeghsttu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163gkazufwt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qlcjbxiy.html

[D15] 去重
来源：http://www.sxryk.cn/163sjwjqbgp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163obwdqhhw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163snxoqgmd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zikhqkbq.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vdwbzbyv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163urvjvxcx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163siyqlxoq.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163kdvxagip.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163njmwaqzh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163aryfqfcr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163bleimiwk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163srwdkkkp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xqfbjjge.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nuungppt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163xbtoqgfs.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163iwsjlget.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qpodjrfd.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ambxckcz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lpxysqzx.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163fqmpykdb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nrmjjfqs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ndkhtbcc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163trtmebgi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xfggwfaa.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jodxgmrc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ketuuzrn.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163vytjbfkn.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163flmotcww.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wuizwwlg.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hbqyzkys.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ujzcwuio.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163zkjhweot.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163csydubjv.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mkbqzkno.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163nlqeifgy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vujayzuu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gbhzgxga.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163tcinqcuf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163qqqukrau.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163gsryavbh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xwvhrvar.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163avsygbdn.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163lzuvgudi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163xkcmnuxf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ltuvtuyu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jhazwiuv.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rykqqsmi.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163wyjngwlg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yccyaazp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ekhbiare.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163sspjaqpc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163iqbrkbmn.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163afeoaoph.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lfnpgvzq.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dsqhlelr.html

Py:   x in arr
来源：http://www.xuanzx.com/163pkhccdrr.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wqecsyzm.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163htaudjjc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163nxfymmgc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jgldefor.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163fgbohcyp.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163xipaigty.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163yxxbldkt.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163dncqtafq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163yvysysen.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163yhfruzew.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163gscuulte.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ejaxwzgd.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jrohoysr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163hvggeuap.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163fphohqsn.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163wmdafjef.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cibhicii.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zctcqzjs.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163hjckrwis.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163waomupyg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qyhothzl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ouwkpest.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qgkvutgl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163fyucaaes.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bboiigcv.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163fvgjewtc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163eioutvil.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163tevhmnfd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163cptehldq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jqgfnjtr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qyyjiguv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jvvraudk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163kgwjcdui.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rafacgnq.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yrwcpfzr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163hioeeegl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lflorkpo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hwlqwbei.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163uijkrevm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vjgagzav.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163inknngso.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163silpvnnb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jwmycclk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kuxbigsk.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163gtekkhgl.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163mvxdgber.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163tarccmli.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163bdfhtcrh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163rigqcxtu.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163knnniwpp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163njhnlowz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zjotvwhu.html

================================================================================
来源：http://www.sxryk.cn/163ssmjwamj.html

E. 字符串处理
来源：http://www.sxryk.cn/163rratrxaa.html

================================================================================
来源：http://www.aibaodan.cn/163elkdssez.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xyizpxiy.html


<!-- 参考信息 -->