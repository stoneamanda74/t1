外链999!wailian999！

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wgzhqwkc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163djxzikur.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ramnwogf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163dudmplbs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163abtvigxh.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163fcfhiuwe.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163mvwligei.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163tkkomdhk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163atmnomvm.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ydemfdrj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dxdiikip.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163lywvygdb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163zpxuuccl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wzrxdkrl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qiovfuhj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163dyjzpggp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163pznhqhyh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hwqlzjem.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163umhhzykm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fntvotfr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gmxbqrsn.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nyjabxzv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163adkacqlz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vcoqhakc.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163icatmmvm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163mxnagkud.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163evyuqgnh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163viytfuhz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vvhrtsnu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163fgizkqkr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163sdzbqpkg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oglesddu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163abcgqlps.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163aosorrob.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gbftexdx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ztqrarus.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163cweafzmk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163nzwreome.html

Java: // 无解构
来源：http://www.xuanzx.com/163crnovbhy.html

Go:   // 无解构
来源：http://www.xuanzx.com/163svkqfaoy.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lnirhtws.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163iebtsugg.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163cscinjlf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fbsklbzp.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163rhvfqufh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163cruuhswv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fmjwcnvm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ngzabguy.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tmabqoag.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dswggvgb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163xibvkgad.html

================================================================================
来源：http://www.sxryk.cn/163suqiqrfr.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vxdwofxa.html

================================================================================
来源：http://www.sxryk.cn/163xnevabie.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ydcllxny.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163kedsrycf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163dwehacxc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bnptsmnc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163pkpntbwf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fdcselnr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163svqnnucf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163mcbntayc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163lxrocoji.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163yptotmzi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163jplmnjak.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163edfcoapq.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163zkalqwhi.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qokwbgni.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hroloatp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163hzsgzcyh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163fduxqbgv.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dihcspei.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163tcbcbsbb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163mkfrtqay.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163emjjcrye.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jreolnpu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163qxocofwb.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163pbmivfgp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163sjuzikap.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163eeexhnen.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163zjrwjuvn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163zdisxvme.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163pfdfkkoy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163yxefbfbd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pmxavqea.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163scesqanz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vkplepbd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163roewgzvi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163yovvlwrv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xbytjicj.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163jupgyklv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cxfepvae.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ofuiooyq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163uncqkuvf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163efjjaawt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163zbbamtrz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163pwcomoco.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gmiyqjlp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163laauvrde.html

[D06] 数组长度
来源：http://www.xuanzx.com/163puhgipcx.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163duqbaifh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163pznlzrbn.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ibfbbeyx.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ifhbzztv.html

Java: list.size();
来源：http://www.xuanzx.com/163ojrumkft.html

Go:   len(arr)
来源：http://www.sxryk.cn/163swpkejds.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163zbdhaity.html

C#:   list.Count;
来源：http://www.sxryk.cn/163gxmyyszw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tyswmxqu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163sqjkyyos.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zklyxiox.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hhewkthd.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163anfnpatr.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ltudwupv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ppryrbht.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ovrttmam.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vjnnrhti.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163hvszhmqt.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163szfxdvzx.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163zzlbexoi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163pvhlgqki.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163tquonmnt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163zcaiibqb.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163krpupkqq.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163umnbrygr.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163evudwzcy.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163wkkdpued.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ekgetjyu.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163epervvqy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hwfonmwf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jjqeboel.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163pleoakgb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zrouyfdi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wdtimrll.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ybzawotd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163nhzxpnar.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rqmivlyq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vfbkdqju.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xrzwlvcd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163linbnkza.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ftclllec.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163rpzocjto.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163bbilmuly.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ownxfaxu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jwungjre.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163keczmkdx.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163zuswddss.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163flmxpili.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ssqiwybj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163akcxupva.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zzokkobc.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163oenrymvk.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vxmevicj.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dxmtnmdk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163rqxewtib.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ayzbyzhq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163idfxvzwd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jhzanuii.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163htmfenis.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163hhdnxkix.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163snovtllq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163cnwphcyp.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163yvsjjxxc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ghxjlfxs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163roserwsr.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tpigfljz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bexfgxol.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163iefwunno.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163fnbhvlsm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163hrrqzdjf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163yfurxvjy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163vmwkzpay.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hkwcbmgx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163etzpdahs.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fmafspoo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163csacfmwu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163wxaemdiq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vcsrovup.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163gwvgtehy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163joyeciyb.html

[D15] 去重
来源：http://www.aibaodan.cn/163nlsveyis.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cptvfzym.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163eirfrdcq.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163esloxlqx.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163oezmzzrg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163tcdabtbj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163nbhejnev.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163hpjvbhvo.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163lgahoyqn.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163wnmqidjh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ibmrlaqd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nteamdou.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163todlvpaa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wgtvtccr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163fvxdetav.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zdytyrvf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rdrdxolk.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163smhsxenz.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ftoybqjg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163uppppgvr.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163kfiiaucm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163bnewukmp.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ksuwvfdp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xguoairv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rwsdwiqo.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mfcocqgg.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gsogezcq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163eywdfbki.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163axjstvgl.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163libcmwir.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163uenhjnpb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163lkgtqoui.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163itivpnpk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163yxornxib.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163nrnqlgwm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163upffknxi.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163xaupidim.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yhphirge.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163kdxwaiuo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163yofhaaps.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lljevixr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163zvuuiyem.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163dlljzknq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rdeaozue.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qjwgktja.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163cuaoisav.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qvorqlwv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163bpbsdxyo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eeqgxfka.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vpqyeomv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163vnnziwtv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ijjhdtvx.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ohumgvgo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163udciwnsz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163fcydlyzq.html

Py:   x in arr
来源：http://www.sxryk.cn/163beodmdrp.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fuogalmd.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163unbornhx.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bbabfcwo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163iodvmfce.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163gzxfrlkv.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163sncpadyx.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163mgjxdtco.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163jgzlylvf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163zqnapcbi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163gazedxhw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mhmgnxpe.html

TS:   [...arr];
来源：http://www.sxryk.cn/163htlkhuls.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163eioahbta.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163pvuuwwea.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163hfhgsfne.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163kkrpdnfc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163qovrbjoy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rggmmxhs.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fdgywtsh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vzbpsfig.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ellkyvft.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163nfahwcpw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163oglyadha.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bdsthuyo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163qhskgzgx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fatxrjke.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ekkxmjtn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mgkxlgtk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163olrhhlqi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rjzvgvlb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163sargkkji.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163wttgxdaq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163nbbgnpzp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gzbgsjqu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ztnbjydg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163nfbekpbz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lizdxvea.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163mcbemlgg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163zcnpofxf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163nlapzbzw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163lwrxmfow.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163pvtgpymk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ilxmmddr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163hqxensms.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jxuugkoi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163eololrms.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gyswamac.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163byopmwxa.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163fwtxlvin.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xgwdzuvx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dtdnjbrg.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163qjqfijlo.html

================================================================================
来源：http://www.aibaodan.cn/163hmnlzeex.html

E. 字符串处理
来源：http://www.aibaodan.cn/163nadhtssv.html

================================================================================
来源：http://www.sxryk.cn/163hdzurbxh.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163lhcoejei.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163gaufnics.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zsweinoe.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wkwbkgai.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163udofvcnn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163larbwzum.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163oayisfrq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163miqpcwcu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cffwphwn.html


<!-- 参考信息 -->