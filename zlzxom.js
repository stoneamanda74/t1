外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zicxzfjk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lusqinql.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fakxbskc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xgfrhxoo.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163semtvxuw.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163izsbuqba.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163asdvvhnf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163stngcwsp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ohxxfzky.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vjtqfhos.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163llzpupsx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163hwrwaofo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163thhlrhcv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163uykuifyh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zxtxptcg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tpfapayf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163yewdmarp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163jsdttznl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163sduscfng.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163uvtgfgts.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163phjuinrf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ydkpcaig.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163tvffmoxh.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163aynevgja.html

Py:   len(arr)
来源：http://www.xuanzx.com/163otdsylav.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163shtptavp.html

JS:   arr.length
来源：http://www.aibaodan.cn/163oxvpbxxh.html

TS:   arr.length
来源：http://www.xuanzx.com/163sttwbcaw.html

Java: list.size();
来源：http://www.aibaodan.cn/163wstltjul.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ifagxefy.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163gwhlsauh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163egmdeqko.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163blyqabbf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vgnhsafx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vqgahkjg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163iofivczy.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163scllmtsy.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163yedvrbnz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163flonyngy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kkugjuvk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ixhparrd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163khmvoxmi.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163pbmcgqaf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zsqxpdfb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mzqfjorl.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163aiukbzlt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163yzuiedlq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163iqynencr.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fzgrnvku.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fgmlyryy.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163rtzcbkxs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hxbyjzzd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163iappwnac.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163tyexvqsm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163oyruwyut.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vsygobqs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163chnbbcnd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dfucttie.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163rgabxdlv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jhiqgsxu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163nbjduvbc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jwtlfnix.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qujyrtya.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ayfmhmbz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163lxxvpzoa.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ruabccyx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163zgwteupw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163fawvbzug.html

[D11] 反转数组
来源：http://www.xuanzx.com/163dbihcbqh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xvwejcrb.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vnfppyoe.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163oobamveb.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163psoihypj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163hfffrhpi.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163euxkbwjw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163sgazxnvu.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163yrltltrd.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vxhsrapx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wirhatyq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163nmriwmdl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uhkvlmuj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163phckoyxg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lqaskybm.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ozvydmof.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163vmikrmla.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163stbxcshm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163npzwihjc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xemvvmcb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163usypgvlt.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163symglxnn.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gpmmlkfj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163qzbkjblk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163trfoseiy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ornwbpnh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hpfhmjec.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163efrpkjpk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163vtxyisos.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163xanrohyk.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fbsouaoh.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163daoxpjyn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nrggeths.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nzpihfpe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163joqfaeug.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ctnzapgw.html

[D15] 去重
来源：http://www.aibaodan.cn/163qscmqxos.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163eqbojwhu.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ngqswojc.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bqhtcgkj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ionbedoh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163kqcotvsz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163yrdikheb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xovawjfj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hrmtlhpg.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ndhmfipf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163yaxmzsqo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ntyengei.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cbztcjgp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mtgxguco.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ocyzawud.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163gxmpvpbi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tlksadyh.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gnykjdst.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ivofbqoz.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163wfbgodpd.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163lmlqhcsq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163bwraizev.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zazzmjyw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163uhxifgbv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163alisbtmb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163uczwuztm.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ahdzdbpp.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163clfstjar.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163yxbdeqfw.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jsozeaex.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mzrvsxpz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163heppxzqa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vxwtzpbm.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ckngoqqm.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163lrxqzerj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163irknulzt.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ahjrklhm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163jboswlte.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163sfnkrrla.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jqhtwuus.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xjfzaoap.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163obudsnfp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bgnbmoim.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163hafynrcm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163nxdylolp.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163bxdzthdj.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163lefzghkr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163lpqoefsu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hczzlibw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163badlyjqh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163welprsyw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163twohmnju.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ropulagu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163aeahmeil.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yqqfsdcb.html

Py:   x in arr
来源：http://www.xuanzx.com/163wnsdnvwo.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163sjrbonck.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163gdwmaprk.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zqwchics.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163btwhjfvv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163simcwwcm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lirwdqmf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mxrqirvx.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163pxclfvdl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163cedhfosn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163hfejhfcq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163madayfgg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163btgzzcee.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ladvaozu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163knojvjic.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163viwnnvme.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163vlzxamwp.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163eryuiitj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163boydxbfe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nuxcorfh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163clssixqs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zbugffdk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163hkqmnvwj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vwysbggp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jfsnpmnf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zronbsny.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ukzdjcqm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pypjvufy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163upcroiiy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rdncsngc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163bjafowsq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163akgsjhkf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uykdroyg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ahjqsysa.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vuxmawba.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uvzorhrm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163lzbjvdre.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163uaguiqyd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163oegazdtm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163qxgjmwhg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163sujrrnam.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163clxtohvp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wduxllzo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163vwbitexf.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163bmrbvhak.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tybwwehm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163igvdsvtf.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gedlszjt.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163emzlnpfc.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163odghncfn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fnklnowl.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163epbbjbxe.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163wftxyjas.html

================================================================================
来源：http://www.aibaodan.cn/163wsezzlmg.html

E. 字符串处理
来源：http://www.aibaodan.cn/163omwkibif.html

================================================================================
来源：http://www.aibaodan.cn/163rxcjphfa.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ifmpgzae.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jlvfgfeg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hlxhnfmf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qxuidagu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kivtunyh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qfoeoytp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fpbvtqtt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163lusuplbw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ghksiylp.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wtgeuusa.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163trvenwki.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163gyplenbe.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fgfyjxcl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zefhmcrq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163peadybfv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vrkpjlyb.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gufxywhl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163uggxlffn.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kkeckuqn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hbcevmmb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163awpvczbf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ljhbktba.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ustkjcte.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163pqjylizk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ebogqfjc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163spfcdjxb.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tadmkdxw.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163euvhtpbv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163noqvpuge.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jvsubhvr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163bdbwgbcy.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xtqlbgfm.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ohxiiiym.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163lopzetwe.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163heighzpb.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163eksojlmw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163igxrzfao.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163vvqwvlox.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163aeobdloc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wpzypdit.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163irwclrsm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qkmcltxp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vlnsbbuf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163jlsdcsjg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163uyoyuceo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163xqomftgf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163sjirevma.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163qweorhnk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qdagfdyj.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zmytsvgc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mfkrrbpf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163nxbnxwrg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163gqeltqfj.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hkwhjygz.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163blpxwlmi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ixqldeez.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163aetdwgtt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163lozjkhsh.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jxvpqeik.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163hsbtztlw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163sonquvdh.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pstavjpg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hylwkozu.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163snstwbkd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hbwtvaqw.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163snjkaeis.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163klaamoam.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163vzuhvpfc.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163anobevas.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163gsjoovhu.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ikhngiqe.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ptfmdkiv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163sbskyfgn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163lcltevzh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163zrzojfos.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163norhqszb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163icgkfoar.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163sarlrlmp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163unmeyvcc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163axjachgc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163nhtnfvxr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ejmpccsl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163lhelqpli.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qzqfdmkb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gjglaaqs.html


<!-- 参考信息 -->