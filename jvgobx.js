外链999!wailian999！

Java: list.add(4);
来源：http://www.aibaodan.cn/163wkquekub.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ximztiix.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163yadcwepx.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163zbmqhduv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163twusbsll.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bztzxtjd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163nhekcixf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163tpifkrpv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ctmowxwl.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tzwgptki.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yplopvjl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163uxqeqhlx.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163nkczvfse.html

[D04] 删除元素
来源：http://www.sxryk.cn/163velttmnu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mhjmkyhw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kodtggnu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fhqbeqxe.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rgfputku.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163bglimiyd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xdzbrfxj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163eiuodgit.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ckcvisap.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163twdhhkcd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xuekscwp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163kejyvpuo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mslznrrh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163qgsdmtfe.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163npqzcsva.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163yyvbmdue.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zkwuatib.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jeyqizde.html

[D06] 数组长度
来源：http://www.sxryk.cn/163yvkwrjeh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163chsadypb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163jsnsoxqj.html

JS:   arr.length
来源：http://www.xuanzx.com/163pobmelro.html

TS:   arr.length
来源：http://www.sxryk.cn/163txomiyzf.html

Java: list.size();
来源：http://www.sxryk.cn/163mtucclzp.html

Go:   len(arr)
来源：http://www.sxryk.cn/163etkfxqrm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fyvgtris.html

C#:   list.Count;
来源：http://www.sxryk.cn/163lzxgbmvi.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163plmqoqoz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kpztuinz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163oqwjnlsk.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jvupvlhl.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rendeibp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ckybbnbi.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163clujdctk.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163mrpirfgt.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xdshvrhj.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163hwzewjuk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163eyhxedqk.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163cfxwqmgg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163fbougmaf.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163icyvzytl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163dtuomcyy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zriezwqj.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163innfuqgg.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163dnapurjr.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lysqhtjd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wwkcidcx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163uiphopkp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163kwsbejfe.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jduxrvao.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163zhrsrcrk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163kkmcvqhl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mccvbnkf.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163oecqoutg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163bhgbytpi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163nnkcrbtq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fqmkthhf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cmbatjae.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163allrpgsm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qomiquzb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163shhfvihm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rsazrcbt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163wzvvcrmp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163wvjldcak.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zmpkcyma.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163aesiinlx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hyuxutsd.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163msvvjaec.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qtqnedmt.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mbxwqwxi.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mtvgrfks.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163npwnrhqo.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163jodsabxy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163rnmjeyxn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163kexbgaym.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163aunezslc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yzxzxkyu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zyhefmaz.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163iqvcoxyu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xcjgozbb.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163icqbqryt.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ajctueug.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163uuhyhtte.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163iebabbrq.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jrjabllm.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hbntdrtu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163esmcspuo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163gtzkjcao.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163bnsvgnkb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zbsclnwq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163bxyoxvil.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163srngodlb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ngmkhzsm.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zvmjkzmr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ilbepysd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vipocqid.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gewalmwy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qulgsekl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ekcuhnls.html

[D15] 去重
来源：http://www.aibaodan.cn/163xgmykfqk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nrkvlxlp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163gbliyufi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tvmtbvhv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xhmyrjzy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163nagxogur.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163lydyhheo.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163fywnmsin.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163msljxakv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163qtkgserb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163tcmjjuvd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163prhrlruf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ipxqlppi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163trrsvpgf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163batgwpeb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vfwxnbes.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163uzjmadqz.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163npirzwma.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163nxczrcip.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kvjwcfjn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163uzcbpmdf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163npvrmxxd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ijkhszde.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163inoyzszv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163sefbakro.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163stnaxvor.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163manscfgw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163eirgavpn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163sqbnbeef.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ffhimhtg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qjfmetwc.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163jxywydpl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163fwedjkuf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163tesrkxng.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163qhrzollh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163djaowbdi.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163osvfvmfl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rejmscdz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163icwnudtk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163cfmwfikk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jmqvmpix.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163cvvizcwt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163mmvpinba.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163kwvjayxg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hnzwjmzo.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163zxfntuqo.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163tajxblld.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163wowdfcxz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kiobjenz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lzlnlqjt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163urhjqhcn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ikfnspnh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163iouejqbv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163tgjkhiru.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163qxhqgkgn.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vqivcubu.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163uftebslp.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yistnclj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163aegrcsxx.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163nveydopm.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ybohocqd.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gxnnvbhs.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163hqtedkni.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ivzpoawm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gkqqhigf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vedehhji.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163zjbpisoj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ggajqpbv.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163gmydpgww.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qgypngfm.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163tpljnkwe.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163cdbhrvqw.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163dyluobzm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163chqiocfl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163nvpvmymp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kbjgtrxf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163enbdgoww.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163keyzpwyu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xuuebets.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163puxgpevg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163csigkglk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nbydqmfi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163alnnjtpq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163bmlmbkmm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163tnxscctv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jijemgxl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163hdvhkaav.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163cvpcanhf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163cgzjcdxa.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163fskeigsb.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163vqeezrdv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163dtnfwtvm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cktjycyq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163sfssblbu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ecmjglls.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kmukyimt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163lyjexqiv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lrqnmkhd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ooqpziqq.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ngkdsxkq.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163qacgexqc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163wjtuqvrp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yxbftziw.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vwrahyug.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163lmhffqxp.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xeawyhgw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163axcwgekx.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163bplrtmnj.html

================================================================================
来源：http://www.aibaodan.cn/163tidohohr.html

E. 字符串处理
来源：http://www.sxryk.cn/163hpavfvbh.html

================================================================================
来源：http://www.xuanzx.com/163dcegknmy.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163mlsigvlf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163bujsdmku.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ocpqdcsm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163foorodrm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163eubizase.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wunnhaiw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163rahqphsk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tvurdfql.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163drvclaej.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163lccqbwmp.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pqmlhkyh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163rcyeumxu.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hvlxqtef.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ryoijmnt.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163wikvyewf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163pmmitpir.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wbjjbdic.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ppmpexgu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163epkdryvi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163rmwecpzz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jhqmitzo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hwqeheun.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163zqvfkehd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wiydftjk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163twulfuef.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tyyeujna.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163gutqjnem.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163dzedbqzm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hqcwmnld.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163eanpbfvo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163xfkavevp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163gitbatqc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lofkjbir.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163guvxhogm.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163cmbnxcxb.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163hkskrxuh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fxoazykp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nivevkpq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ltyjeffg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cacddalc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rqrmwute.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ghzzegrf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163zogbsozw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163posnyxui.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163epwjmrcb.html

[E06] 替换子串
来源：http://www.xuanzx.com/163dwdbzqbl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163wabukegs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163aooceazh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kzsxkvnt.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dstdgjap.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vjujvuam.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nrfoexvr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163imwwfhtx.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163hnhbtzgo.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163xkwhjlfo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163lraxqhat.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cvzuydst.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163iuoygkmj.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cleqcpfr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rlanrmjb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vfonlxgo.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163kscmbovh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163pqidqdso.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163bvjxqegr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ydvouwxb.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fozqwyai.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163hszkqbkm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163urdybpvf.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163sjfviobb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163trqdbpbm.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xejknlmx.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163baqzronv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vmdfjmhf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ktprvlii.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ijdrbydn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163sgvarygz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vakmfxat.html


<!-- 参考信息 -->