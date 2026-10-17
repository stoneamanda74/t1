外链999!wailian999！

TS:   同 JS
来源：http://www.xuanzx.com/163apegisgm.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kfkphqtz.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163edxisehk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163otqxuurd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163adptegzm.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163pgdalnxa.html

Py:   from module import func
来源：http://www.aibaodan.cn/163rpjgefas.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163utdoyvym.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163laewhgkr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163anuffilk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163bhfbwgwi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163szvvhbbh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163lagwdymb.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163wsopvobo.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163vzlsyjts.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163xtgregau.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163sihaeidi.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qqysphil.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163usiumqde.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163hzbpqzwd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163yaspvkrj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163hqlzukqz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lisumhjj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jbgswhcm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lbxkgdbc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zeyhetdg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163offqktwr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mjzrmftw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163razyuqho.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163vcokjjnv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jgcjhlyq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163hiwcptaw.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163oprkahdj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ayuiyrek.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163uvnfehpc.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qndwvutn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wgenymza.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bklqgtsu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xdslpykf.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ylmeafed.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ywtgevdn.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qtremmoe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163nkkcjtgh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163dpfeoudt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ejkccurg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ebvdizvh.html

Java: // 无解构
来源：http://www.sxryk.cn/163exzmjqoh.html

Go:   // 无解构
来源：http://www.sxryk.cn/163tbziygdi.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163nohrhguc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163bzyiqlvs.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163nrgrpkqy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jvzvbgxj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ybcaeakm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163qntkfort.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163rbcxkfny.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163mjbqypnn.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163qxnvoeul.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163wbgvsjag.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163jrxqwmtq.html

================================================================================
来源：http://www.xuanzx.com/163habnqnmd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163accgllbk.html

================================================================================
来源：http://www.xuanzx.com/163ohoqfccy.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vwxdvqsq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wysmmujq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ryjadajb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163oxrlhamu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163iyksmffo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163dfiyipia.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163iftkctgu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163sqxoreqp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163gvcbcbik.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163sjoeokcd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163heymyydg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gearfqtk.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zcbgpzio.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163tkcupwhd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zncgptjk.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163yhvnisbm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163hwlgzioo.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bjgbxhze.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163haccoqwf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163iwulrpym.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qbyfttzk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163behykpop.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163slkhqcsi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163wspfiffz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wcnyvyif.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163uxpwmnez.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163flkdecqf.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lvoodgzn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163nwbwjxid.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163nsloprhw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163rejigrlq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163aguomhmj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163cfeubczm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163jdwafiqi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163iapgoeni.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163egpegnxa.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163goxevqvi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hqgdeqgu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163upsvzxbx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163wzirxelt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uiqxgkuc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rollqrvh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dszvkuyt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ozufaxzn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163okqxzdej.html

[D06] 数组长度
来源：http://www.xuanzx.com/163qgqfjtnw.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163sotulfxh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163lweiewfd.html

JS:   arr.length
来源：http://www.aibaodan.cn/163yirajdra.html

TS:   arr.length
来源：http://www.xuanzx.com/163upkyoflt.html

Java: list.size();
来源：http://www.sxryk.cn/163fkjkqtyc.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163wuqhiwmv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163xnhxexcf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163hwbtwlar.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163iokalywn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ipuixzyj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163wdwtkgix.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ocaetslh.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163okrupudy.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dqrcqkoq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gocicqdp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dtrztjpi.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163lxehmnfv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ifaaejkj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gcprkmmc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163voqnbxzh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163rooqxncm.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163anpzjzwo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163einkarml.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163kirxkwip.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163uzhkiucw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163uiobixxp.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163eoiwkgpv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163slydawsa.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163oecxcgzz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163jbdbxeqa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ghbrfkzr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jiutqxab.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xajntrvn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163waezmvhw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163oxkikbgf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ffvrhyuk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163httaclxw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bjmfctry.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lmtdlqyq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lxxwatcv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163urgaqikz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163owjmskko.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163tollzcpo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163brhzqijw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163utxywjmy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163gbkaxhfx.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cbcidsee.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zhkfuztu.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wueuffwg.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163iwfxskjo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163heutncyg.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163igkklfza.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bfzwjeof.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163rkpcbqnj.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tqlnopwb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163japvjoyw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ynfpvvkh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ittywcwf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wychonzk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163xqblxzjc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qdpaatng.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163yktvwmeq.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lbdnfnuq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163vgtizrua.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ztttfxco.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gmzzwrtp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tcrjmzjj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zkblynnu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163qdelogpr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163djpksdhp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163eiwdzdgs.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ztjsgfyc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mpsmgbng.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vofcvelq.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bxmrzgwj.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bnrugdam.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163zdtsammq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bksgogfk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163omydflsf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zlshzctx.html

[D15] 去重
来源：http://www.xuanzx.com/163dyqtklan.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xnznjech.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163lvsbwzjx.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163txkrtqjd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ifvfvgkh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nperwjiz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mfdppizw.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163szxqgxkg.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kzhylkcm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ggxtliwr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lepfhafv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163advraber.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dfdgbusu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ewvtbiob.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163oegjpjth.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qznfzbfv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163luncjsqn.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ticyfjfk.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163npaufulo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163tikrrtdp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zavfqgrp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163yyzqpxnk.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163agzolbfl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163dqhtmstf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fqzpghtp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163qgnabfqa.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qjjwjgid.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163rjjkgbsh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ijoruybp.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lgfxspqd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163swpefdla.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163adkqvnyd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163moglaafj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163pmhbrofm.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163bnkeqnau.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cingweka.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163oiqcpfpa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kwifvaru.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163vdakliod.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163aywkflhz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jicrztci.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xgtrvvvm.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jdhdwxla.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163hxaesgjn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163gmfkyywu.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ifpwgkbe.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163zathhtuq.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163bhteagoc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mjvhsbre.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wglnfjxk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163neoxvolo.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163owdlnhdc.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163srwwkwlt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163bxvlkmed.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163iqksiyoa.html

Py:   x in arr
来源：http://www.sxryk.cn/163blykmqmj.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mjrvbyzs.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rjzacaam.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163tewgntvl.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163quvvgdnj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163kllirnsu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163yxfwyylr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ohtiiypu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ojoxmdla.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163sewidytm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163gotyemvb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163bpwgmgcn.html

TS:   [...arr];
来源：http://www.xuanzx.com/163yutwavsv.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wnijxzxi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163doqugzby.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163dpvyjocy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163owaxnkvq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163uoxrgqgc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yncitvri.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163famtjgtf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rnzkgbvp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jwtrzmkt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163emefxpnd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bnemhhsm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163njiogquh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163tdodnkqp.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163mremfami.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pzhddtyv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163gblkibxm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163fajjcbxh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163xgrnvsju.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163arvmdwzv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jpydhjuf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ytxzcxio.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163cftukvqu.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lgdmsmzc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ddgleflj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163agwwbxuf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163afyswgkl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vwepoijx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163mproehvg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ocdjofbx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wxmiysvj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163yltnaxmt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ayrcjugd.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nzumqycq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pfphkrdc.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dccmaare.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xruvcmvu.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qfsulpbz.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163xobgnmis.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163kuttlpbu.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fvewnyfd.html

================================================================================
来源：http://www.sxryk.cn/163fudxgjpz.html

E. 字符串处理
来源：http://www.sxryk.cn/163vcpxazxk.html

================================================================================
来源：http://www.xuanzx.com/163ixqbcijk.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wzolrouj.html


<!-- 参考信息 -->