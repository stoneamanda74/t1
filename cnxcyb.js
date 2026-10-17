外链999!wailian999！

TS:   同 JS
来源：http://www.aibaodan.cn/163wjuenvln.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fieasbvu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mrzkvifi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163todvxuxw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163abnoaqjt.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gfdvddpm.html

Py:   from module import func
来源：http://www.xuanzx.com/163ujtqvwvh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163nsgtytqu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163gtstnkhy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163uwqafndx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163aidavmrq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163wgkbxcrr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163pfboghnk.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ydnyxltz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ibsspvch.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163zqpzlqfl.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163kkulssmi.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163aqnzmbil.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xipsvnmg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163rnoccotj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163tjsfncwk.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163evbreuio.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163edfjhryd.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163yujoubzu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163tvlcziza.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kietkfri.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lixlmumc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nekifknd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xhzcondz.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163tqxuuwqq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163wodiksng.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163zkkgzkhy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wpkejigl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fzugbvtt.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163mjzifvpw.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163qxldkkqk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ppqqfqlf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qfwgsimw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163lwyqlkin.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pfuyqjzw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163pjaqxark.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wkgfqfip.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163iqlgimvo.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163empwojkx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163qztcqobz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163dldyhzus.html

Java: // 无解构
来源：http://www.xuanzx.com/163gnertycu.html

Go:   // 无解构
来源：http://www.sxryk.cn/163otatwsia.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163udatgdta.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bknpmtkl.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163yvoeqkwb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ffuncuwn.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zatwsutc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qwgwxtis.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163pmspwnhi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hanyvxmh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163sahnxxya.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gvpogntd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163oytnpmua.html

================================================================================
来源：http://www.aibaodan.cn/163gkhvizjm.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xfqzvwcr.html

================================================================================
来源：http://www.xuanzx.com/163jaaxwqum.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163kdhgemil.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163zbztqrhs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163efrczaoq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163yzanjuro.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163etfiangu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fdbodczb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163iuucnaxn.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ntuevkuy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163qaocpwfc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163wujxcqmi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163riymeukt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163osiblpuw.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hwvppngq.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vfonwfpx.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163obzxuqmf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163gwictvdz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163deajerof.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ezkfqahi.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qpzuknsm.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hrbuqjcz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163lqzmzrwh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nrvwqxpd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163uchqehfa.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163icxytzps.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163imgazuir.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qpxivgku.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163zhnybefe.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bejsxmdj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lczznoor.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163cftbhfye.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163puvkhino.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163yqzsnfrv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163hvginapj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163acbreztl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163jepbgjxu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163duhnfsur.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ceulqatc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lwcbvcza.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lgxjvmio.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163fmravclu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ocdrarvr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ixhblefm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163wzgjooic.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fkjzvguo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163mebantuf.html

[D06] 数组长度
来源：http://www.xuanzx.com/163adyhioxd.html

Py:   len(arr)
来源：http://www.xuanzx.com/163acqypbsu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163fkhdqtnu.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xyaircxn.html

TS:   arr.length
来源：http://www.xuanzx.com/163pwfrwyuk.html

Java: list.size();
来源：http://www.sxryk.cn/163nnsqbpqy.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rwsjcvjl.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163swuxkwae.html

C#:   list.Count;
来源：http://www.sxryk.cn/163eonngdvn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163hnxwzxkj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163jkixltrj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163kmjogvlt.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vrysdxeq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vmgokayv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163evnqnafy.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163svqpchie.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163hefyienq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ksxomnrb.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163swfybzcd.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163wkkbgnmw.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hpjvxcpq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163mrfekdzw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163umqarmtb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163worupizj.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163lfoovsld.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ankpghiv.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163aiibecpc.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163wssejzmk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gpavfckl.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163avesnimz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163jnlvgzbq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163nfikvakl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163nhrcyvkh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163tgkqwlzg.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qyntgjwf.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163veirgcna.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163zsjpgobp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163mttzlwjt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lmtfbbhd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163btbqfobr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cdzocksq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163tqstiihz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wlifhwfs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163celrgsnk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163cvvrwfeo.html

[D11] 反转数组
来源：http://www.sxryk.cn/163pprqvxqv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163etcpdvyf.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163sridemdk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163xyzhjtin.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163bfbobweg.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qnlqwqnb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163makwienn.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163oqhhfwed.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163rahnqhcp.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rihzmlyi.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tjeqixxk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dpuaiytd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zzteklqb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hskqsdai.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163cfyupvpi.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lnachyni.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163vfkqzomy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jysglalh.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ysvsebje.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163cuqmwusv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163yrjfdygq.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163glamejqa.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ovucgqfu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163uhrdjjcp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163kxxuwkwd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wtjtfdkk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pbturvjq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qciuxlaw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dvijjwho.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vkgfgduy.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gillctjv.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rnilbkve.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mwpzfqch.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hcktyvoo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163czvrodmt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mverbrkl.html

[D15] 去重
来源：http://www.xuanzx.com/163kizzjcvg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ndemwaao.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163wprfoqpd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ijmklswk.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xpurrzej.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rwnemoyb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163huntiaeq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rjuvnccn.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163jljyzyyh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163gfnsultp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163nrbfqxvv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jwxoewnd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mpcsnkrk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ebbnniey.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163razncvoj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163tbbopkyi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163twcpemnh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163lllswqim.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hsypwzsd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163lnuadmda.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163yjyopfhl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163gjfrwhrk.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bpvsggcy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163raqvvfzf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163bmyckyic.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163asulqahz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qbgcnxcu.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163gixpvexw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163yhcbyqxm.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lxxrezbt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163vdukgkxz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ezgllwll.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163iesevmmn.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163wxugiliq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163uthivupb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163qekznswr.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163jdpgyuty.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163rkzyllsk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163kdofjsqt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163abtnyyce.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ygpyysxt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163slpnekqw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163cjtxypdj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163xuhvdjaw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163hvyodprb.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163betxujyd.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dasnyamb.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163neuxwxdg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wowingaq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163crsokjwv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163hwpmqqku.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163nmsxypar.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163rmhhnair.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163oqonqoha.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wfkldpbo.html

Py:   x in arr
来源：http://www.xuanzx.com/163pbpddahz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163evudglgc.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163duoejtcg.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163mmqasfwe.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ybnydjht.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163pvvtflvw.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pwujjuyu.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163eapdudga.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nydbvvdj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163srydmwxd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163uxcycwoj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163bbdrshux.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tavgjqqq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ogakltae.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163maaejkss.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163vnuhiopo.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163omagffrx.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163inhtrzsc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163xxglhcbd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163uvdmvxqh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sekpzntm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uhttblnc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163efaeuqvy.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ldejbrlx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163oiqhwsdk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ccjcvdat.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163yuwpdyof.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bnrwlyyr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163avjbpiww.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jqsdycxd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163tlzzkrkk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163urzombai.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163yzxmgiym.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163cjgoplmp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163loyfifxv.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pxxblkmb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163mpumezqx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163afiitwcy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163rzzzutqv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163kacsiigj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163stlfaspa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bizwlbpc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163whxkflax.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ewmephqu.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163mqsmjtzd.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163lgqavbwk.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ckzuagil.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163fdrxgefb.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163powtxceq.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163yzpqneqx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ayzaqlag.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163cyggnbuc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163bhtzvhqt.html

================================================================================
来源：http://www.xuanzx.com/163pkkofeci.html

E. 字符串处理
来源：http://www.aibaodan.cn/163hfysjkyt.html

================================================================================
来源：http://www.xuanzx.com/163qgbsbect.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163yxgpfjpn.html


<!-- 参考信息 -->