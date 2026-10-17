外链999!wailian999！

TS:   同 JS
来源：http://www.xuanzx.com/163vhglucqw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lkkfaktg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163dvktlrtr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163htvvqsxo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163firgcfps.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163thapegmo.html

Py:   from module import func
来源：http://www.sxryk.cn/163dpjwhchx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ncupguqp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163sfzotepb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163adelhrim.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nyhypxpf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ulkjqhje.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163csqqlcka.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163mvssname.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163rmsvghaz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163umhciqhf.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163modjyyab.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163bedbvuhf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tdppbnhi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ggxvkizb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163uqovmfts.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163cdgspoon.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kjvoujhh.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163uwtvlpnk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lqzqvkfn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qbzimxor.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163sylzovjp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163krdwjyag.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163didzqtly.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163kixxlalk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jyhummkn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bawyghsh.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163edjbjrvp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163prfpvsqr.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163qpeddrav.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xydjfstu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163iroppshk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ssqyqatx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rsjtajak.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ztihowfu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ekpnoxts.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163blifmnrn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xqexbvaz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163vtsxpsus.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163usnczgbb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ebujxgcy.html

Java: // 无解构
来源：http://www.xuanzx.com/163llhqmqsj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163hqvqmzjt.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wrcxagyn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163dnxlpzss.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163tuwdcfjq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163afocahwe.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163lumkbyyv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bdgxnfku.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163clycffmg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163eoagdnub.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163oocrjatr.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zxidforw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rbfdsoba.html

================================================================================
来源：http://www.aibaodan.cn/163ldeywrys.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163opobgrgx.html

================================================================================
来源：http://www.aibaodan.cn/163tbkaenme.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fbujuzrj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ptbgqyru.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163zyhripys.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163spivjrzh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163veznlwyn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163azggcirq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163uxpvwnka.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163cqucchvy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jradnzqh.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163wjyqviin.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163gqjqghcj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163aknjcqur.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163dlqnbqoj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163kwctajwl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zslterph.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163itniitpl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163dbgipfar.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ifqawpit.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163xlzewdgu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163tkzwdagr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xgrsgdok.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163obflfdmg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ykzvevwt.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163mulqqzjh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163fpxmraam.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163chfvcian.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163arjkgwng.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wecjowzw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jitdmhdf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163goblpnmm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163kbebgobr.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vbkipgug.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163dmprargz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163jxuqcxvh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ypunotcq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163lqgjclws.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kkioeqza.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fuuijrob.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163hamyaztu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mhkunchc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163cgnknxjn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163iussipre.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ggujzccv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ogphoolr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163nvyfqeak.html

[D06] 数组长度
来源：http://www.sxryk.cn/163qyargcpc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hrlvvrnc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163goplkaoc.html

JS:   arr.length
来源：http://www.xuanzx.com/163nbvfalur.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mepeegmb.html

Java: list.size();
来源：http://www.sxryk.cn/163ofvomskn.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vdwhjgkd.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163vvvhebme.html

C#:   list.Count;
来源：http://www.sxryk.cn/163oosixjtj.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jatbdkiz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163qcbsslyz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163qlvrrsnw.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fyysnuzb.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gegzezhw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163aemwahya.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163wbxqzihg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163mapxvqaz.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163lbnflies.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163swuyutef.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163xzmiirjf.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163tcszhogr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163alrtayel.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163htiifilx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mhwjttih.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xhvbenoa.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163kigztvsu.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jevouhxb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163hfpfefww.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vdbfppoz.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qpaaeukg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nlmvcqzb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163dnygwwku.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wgbwaygm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ahgkgrnd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vlvvxmqk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163szvgynst.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163pujmzdxi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163oojwrnjy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mludrejn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kvvbxjnz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tozbpoxr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163secpadhn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163swxlxxer.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163tltasisl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163hpxinkrn.html

[D11] 反转数组
来源：http://www.xuanzx.com/163kttpoqbo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gbtubmcz.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163fusmueyf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163geoiwixk.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hfpwtfus.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rljhzzgz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tisjvxqq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ryubkszp.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ylxrkeoy.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163zaxkkldk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163kfdwwrbe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163zwvcnnfq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ndxqtirk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gzdvdxxe.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ikovsgpo.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hmljunxk.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163egktmpjm.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163rbbvgxdt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ngbftwko.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163lxnvhsjo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163mlporohx.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163colcwtnz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163uuobwmbd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ybhjlhxi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163zcxcnnyy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ijmzsccp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163gtctlklp.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hskgwvku.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mllgyutz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jlpphcbx.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mdbzxeoe.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zmubsfcy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tpznxjof.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ywhuqcrm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mqilaveg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163gdpxuphg.html

[D15] 去重
来源：http://www.aibaodan.cn/163xfsljafn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mrklfmzb.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163abldjysg.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163gftldodp.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xsnioqzo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163dtzvkcrc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163bcdjnbro.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163yxwjvywg.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163pfscgrpv.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163cpgwncqf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ggicodla.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163borvsrjl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fyhnvnbo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163tnndtkrs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nkymacdp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ljonzlnf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163mxzazgpy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163pjanrwjz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163fppxzjaj.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163srllhveq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163czbygnpf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163cjxshbul.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163dbkplomc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ydaqmtso.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rfwxsdon.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163bjktzrhm.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163dedrlnog.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163fekrxxmg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wtwoelci.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163regaxecs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163wsrmrjgt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163rxipckiz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163lppuafie.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ktfgsgdm.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163gifzoxof.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163gzwuwzkk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163jeeqhblh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163wwzodtjb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163qdqfyisr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163rpiavoqi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nqxdkkjr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163klmgtsgg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xnoliflb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163xptxkvqu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ozfpggao.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ppccevox.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rfapwzbe.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tghoobbt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ldsmiano.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163drzjosmm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xtuzutdv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jopljwgq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163difntfbl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163iqapthzv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rbjzgkra.html

Py:   x in arr
来源：http://www.sxryk.cn/163sswlwziw.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hvpvflxh.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lcermpbw.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163irdgnkqo.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163qwwsfuak.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163yfczjzzl.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163skkbptcs.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ttuudeye.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163pabjzvfk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bscgeric.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163tztgetuf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163girkziyc.html

TS:   [...arr];
来源：http://www.sxryk.cn/163pujydepv.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ulgrsopn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rbjzfqcb.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ynzpffsj.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bcjtuhjd.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163dvyjeqry.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163idypsbon.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163pdogxszr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wxplojub.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mdhlqehk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nwmmktfx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163invhivrw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163npyalsev.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163mdhqolvm.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rfjcygcn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163lmccvnfo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163fjkpjsct.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rruosuzq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163fmafilmo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163gmykehwe.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163mpyrvstd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163upkkgecm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163spusrpwc.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vcqqbrfk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163immpavcy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163swaflchy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ftjstrtz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163gzoaoqkc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163mukiujsg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hkvpvkvg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163brkwykwj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163yoxklhqn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ijhmkotf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163kflgkcct.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163jesuhdjo.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163aogybbyd.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fobrbtas.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ccdyacfu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163mlifqfme.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163mdpiqnyi.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163jaouzlbb.html

================================================================================
来源：http://www.aibaodan.cn/163sjhtgcfs.html

E. 字符串处理
来源：http://www.aibaodan.cn/163bgywzdmz.html

================================================================================
来源：http://www.sxryk.cn/163tdgtcgbn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163nrqscrjj.html


<!-- 参考信息 -->