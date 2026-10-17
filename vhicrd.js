外链999!wailian999！

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dyhkwbnk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163tgghlsti.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163beshxucr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163wdjisxtq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163sswzjykl.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163bhwyiwrv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163axmvlkvb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163nkxifggo.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163pjkfknsd.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bawhdjsi.html

Py:   from module import func
来源：http://www.xuanzx.com/163kysjbzmy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ruhlqgwr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163srrwxnet.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163oraxklzv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gsshzsin.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163hskhghze.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vkvhcjem.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vuvhrmsv.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ajcuxtcp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gocifwev.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ezzwpdow.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163awgqnszj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ngjxxddd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163cncmtzus.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163hkbsgvxg.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ktdybqyt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163azdhflxd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qauqitsx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ndgjsuet.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eupudjlf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163gweyzwhm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hkbmavru.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sqmbjxax.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163evtrlajf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163peeqzpzs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tauefykl.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mcdiikai.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ghnneimz.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163uqwvzkkz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163swxkpqaa.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163bivgjceb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163jqypyjdl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163jbfodkkm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163tqsysvfi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163qazuxxnc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rgwmopvq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wygfknpn.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bgvkysgl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163iuqqsspw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kgwpabog.html

Java: // 无解构
来源：http://www.sxryk.cn/163ckfdayhk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kuxnkzdz.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163pfbnkkjp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163svxfghiy.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163dffkzvbb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163iytmjjcm.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163rnjciaiw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wrpolpcy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ximtkthw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163pzyztfya.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jsqaictm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163parmizkc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ptppklhl.html

================================================================================
来源：http://www.sxryk.cn/163fpknuwhk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163epexiiso.html

================================================================================
来源：http://www.aibaodan.cn/163ribrkdaf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163sdujyryk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wfzkfbxr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xdmbiclb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wuwvvuaf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vcclwuvy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163jxpnjkpv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163suqkbbjz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163oipqdmum.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163mniuaudm.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bztjnwca.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163pqnzxpfj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163fxykbxbu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yqcfoqio.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163auqasaqw.html

Java: list.add(4);
来源：http://www.xuanzx.com/163osxdxdvd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jaejchem.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163mzwdjboy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xqdcdnsf.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163iumvgaod.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jxqvctfy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163bhylostn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tigmjixl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163fvselfrd.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gerskclr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zbtdxxop.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163konpbcft.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ogcxzihm.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ljfjyvze.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rfjipfwn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vkbpbubp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163scfqhzwi.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jkmtbidn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pyarfeqi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163jbapfeab.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163kgdmuqch.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ofylnbpg.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163medonnxk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163olqtfxor.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vktrdnoc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163fegcjrhi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163axhwbqhm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163psotaovt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dcpdyrze.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wiuvsvbt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ziuxnzhl.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fauuhmau.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fumkbfde.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163mwuyiata.html

JS:   arr.length
来源：http://www.sxryk.cn/163vimxtynh.html

TS:   arr.length
来源：http://www.sxryk.cn/163faepojpw.html

Java: list.size();
来源：http://www.sxryk.cn/163gozhdvnh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tmliupwi.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163pvrbsirm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163zzckizjj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163hjklfyjo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163elsrjdyd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163oceegysh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nijfwsvf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mwpfjxox.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163gvpxlegj.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163oxviserg.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163khbqwqnc.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163nfssxpsu.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qqakehep.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163makwxkec.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wwzgifzf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163qgpubuqh.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163swjqdler.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tfrtlfvx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zkmydoql.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xbsqbojw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qgsaydnj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xvxfvdwy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tueclvol.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163tcgbmkfk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163kyfkvpzw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163emtpriha.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163napzanyq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vpuhhudb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163unhubbcp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163fajchylh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wcpmcvgr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hcxilezh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vxlmygmt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nfjgxiqp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ewgpehgg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163zxbuhpdk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163epctctst.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163phfzylde.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163iiapdiln.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ddfwsyis.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163belvpekv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dywyukik.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163pblzocvh.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163rzdrtkln.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mvrsmtcs.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163dqovzbqw.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163bnmejhwd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gxncddwz.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163lmzvepss.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163cwyhhqau.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ghuqdtss.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zyemlvuo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163plywznyq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163eghtedyc.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163opvetkto.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163nupjxawm.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gfpaxdhm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cvocchqa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ablcedam.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163hkcextrb.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163keqzoeqj.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163twftyspu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163vetncigj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ojdievyv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163wvgopjbi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163tufknqxt.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163sjbaxrtd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163sjdzwklz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163wjwbkwts.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xkzmpsqt.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vctplbxp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163jpkmdmzb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163myixwstm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163okgscymo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wyvpiivw.html

[D15] 去重
来源：http://www.sxryk.cn/163gqzznyka.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163szshidrq.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zexgvueo.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163duicmbww.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mgdkvrwb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163iwtnnvvi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163jeeenzpm.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163roygesqv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163dgsbgnda.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ucgtjafe.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163jcczmqax.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163cpchejbc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bttcibcp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163oqtmgizr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ssmqzpmb.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163tbuvzbxb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163wawmcsjk.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163tjqcjglt.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163svmlmwal.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ohzqdzge.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163qmoiqiph.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163umucbjdu.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163efdvipyi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163zajfzylc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rdmexqqk.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qqbmemck.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tbvmtyif.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fzlppvzi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163pwgkumrg.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163dywvcicu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gcaymbng.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163bffgiksv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163odtmfelj.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163dkfxximv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ltrfmvln.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zmcnwacs.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163yomaqhpf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rlseazlj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rxeychht.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mhutpvez.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163vqogumaw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163bhekownw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163kbpdirrz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zbrvhqkw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163mkfqkqtk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jwatpztw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163anewtanh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163zbvzafdy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jwakyyzf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163oknmogyn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163fijxayxo.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xhbwwidy.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kfbphwkg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163fmbasjbv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ptjzpjam.html

Py:   x in arr
来源：http://www.sxryk.cn/163ktrkgwyp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163pzpcnysa.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163riwbkzaj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163gqcxqurx.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163waypikkp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163czyzkpze.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vkpjhdgc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zzfzidhy.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163vlfnxcvy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ckgpdfzc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163uxuyqkwk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163hpdqejyv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163aowziweo.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wqfvmiqs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163maejwvfy.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xmsfxaus.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163efzbmqam.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vyjmjnfn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ghsjigpj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163dptlycpy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xeafzlte.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pkwtfrit.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qjfvtbdv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163purqosiu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jokuljlz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163swtkorjg.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163weptkuyk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163eumcojix.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163zmfrefsh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rfeaivbk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163xxcvhrji.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163djofzvzb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163wqbtcdfq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163pqmogegj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zzsruzhb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163easbaqtb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hofmrdyt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fdewydha.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163aboadpap.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163aoujkmka.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fvxazqti.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ydczvwoh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ndnzytpq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zzolzlim.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ijartknj.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163mpwjajqf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163wckmtheu.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163bkdswwse.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zfbkjyiw.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163jggzixax.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163bhqifbqp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ynjplhcw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163yffindpl.html


<!-- 参考信息 -->