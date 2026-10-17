外链999!wailian999！

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ihwqwndh.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kkpteziw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ulhnkwrp.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bwiahbun.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rtytylxo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ivxcswke.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ptzdooeu.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zaznybqk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163uuodqblg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163kdgiuvxi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163fgqpowtf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163pajyfjiv.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ahqpqeex.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163unqnhvyc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163plwsjqsd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ezeeqxzy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zfuzqblq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163rpsiqqey.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wqvrehiu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jgvwumyq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163txrzkaku.html

[D04] 删除元素
来源：http://www.xuanzx.com/163tjmqhzcy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mfevluyn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163cejaxpyy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163nyumptji.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163aaxmyitj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ogtkvifx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xfeiqwlr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163jkepisvx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163cempxwuz.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mjpuoilc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vkywouwg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vcrprbrk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163gnopvmai.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163biwvihmt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qhnbhgno.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163npxawbgp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zgdzrmcm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163nlxdyyta.html

[D06] 数组长度
来源：http://www.xuanzx.com/163siidnqke.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163icvmbkcm.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qicjgtrp.html

JS:   arr.length
来源：http://www.xuanzx.com/163yrvgtgzt.html

TS:   arr.length
来源：http://www.aibaodan.cn/163zkfhqgtb.html

Java: list.size();
来源：http://www.sxryk.cn/163oyqympml.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jzlwxrqi.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rbdnpjpc.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163debecszs.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jwgwyvkj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ecrhuvfe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hecsktfc.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163duipdysq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163akeqvlda.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nkewrbtv.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xkrucjtz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tszbkqrb.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qelfswoc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163rudhbtzk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vfswhwlt.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163byxypwws.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163diblzwvo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tpdqgvzo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163sbfncavn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163mfzaxhmi.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jbhqrhld.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163sbnkczkv.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dxrqflit.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163srvacxra.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163qrvhpcfs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mwkuixnq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163swmeytml.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qnutyxfa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163cjqwakfc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163amvdoaic.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tgfawnif.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163yhlodtcw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163zzwmgspx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kqxcijpd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zesampvm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bfhpmnay.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xovrivnn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163oycsbyqu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163kcrrfyjq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tkproajt.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ljccszcc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163engxjvvr.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163qisfswss.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ihwikxlg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163euhqefki.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ujckkmmm.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vxwzedsy.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163dweovfcz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163tsfuokvs.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163lqaiaxpo.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163akeumyti.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163hikhbqzv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jvjklcxo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zcvsrttj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ktnooini.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163yyswrjzu.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163qrlzaynv.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163moygdnhu.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163gjixdiud.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163nxxhwgiq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163oqbxnijr.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jrootjwb.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vxtvstoe.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163cqktbhql.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vxitcvjb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ontnkgvt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163nsdnjwol.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163yabfdwll.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zxsgcscb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bxordkki.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vaossisf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qwedqbri.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163zfnpvorh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vvngpsea.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163oijvuqng.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163dscskyno.html

[D15] 去重
来源：http://www.xuanzx.com/163elwnpcdo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ohupytah.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163uslbxrwv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163uieboyga.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vdfclbat.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hfuntgxf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163rfuxyfkk.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163fmymtuma.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163lyrxwobc.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163nmefeyaw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163vczfzbcn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163sfzqykiq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qhvbmegf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hzvaayld.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ikbxyxhs.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bmwsohvz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163dpadgcwg.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163veovlrfj.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163bnjtrnqy.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163oanqcilh.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163fkwcstjj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163mhqjmmzl.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163eljbrrai.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163qflcukey.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163slaavttu.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ungingnh.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163yumoalot.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163prlmiwrv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163aifkvhvw.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cnegreow.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163dwtnqbww.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163tibajlgb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gaqodqhh.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163uyajyhrv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163bugltwal.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163fniciwkt.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163qsisineh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kchxdzfn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163lohdgunf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xqxhnxpi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163pndjwqnp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163uujwgaeg.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163dghuwalt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163kxvlieei.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kckeiysg.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163jcqdfjfk.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163tqhbrwuu.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ckfimwdx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zlgmvqdc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cvfpfbis.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163rfuwjsfe.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ofqzawuy.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163irpshnlb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fiiybpbi.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xtmdhpwq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163oqbopojt.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ypkubduk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kttlrsfu.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163szheykah.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163iubbwdri.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ffrdvcda.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163amgomyby.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163qtwfwsis.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zkvftubn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163scemnlae.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163mubzfhvo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163swgusild.html

TS:   [...arr];
来源：http://www.sxryk.cn/163euoxnnkk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163yakuigrb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ubbvvzel.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kazvzuja.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163onnftrat.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163gtqbzxjv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163euwtfpeg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163rwpujdxo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163uofdqbyt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qkewvihf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163jnftnoli.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ehsxftcu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163vgdjzzln.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gdpvbuww.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ufgsmjjo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163nwoytygp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qaphxbod.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mckoeooj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163aufklvts.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jwiureac.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163bewlzqij.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bhjkmiqx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163yzffxmqz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163idukzdgz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163yxycassc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163rvhjyzbl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ycakkcoj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163adkwtpau.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wqmmyine.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ebzlnant.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163rinnbuhz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163kapknlvy.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163qhydkfho.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mjzqkkdj.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163imwtxomo.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163kihmyxbo.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163pdqljbrd.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dhvivnbc.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lrlcxsib.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jdqwohgy.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wghnizxh.html

================================================================================
来源：http://www.sxryk.cn/163gluzjrha.html

E. 字符串处理
来源：http://www.xuanzx.com/163kfukixsn.html

================================================================================
来源：http://www.xuanzx.com/163qflajgfl.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163btpqmkar.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mfgfbznj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163yzgdaeey.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fjoaoreb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ofivrduq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163caepjrvq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163fhzdwhfp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tbcxlomv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163bywzlytu.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qvigqzwl.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163muzkqehy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zrkijawn.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163svwifiva.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163aztyvque.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ugygobwe.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163uflnlyiu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hqchmvpm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163bxcczldj.html

[E03] 截取子串
来源：http://www.sxryk.cn/163pozwscrn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163eoagimcr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163yimmdcat.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gdkzwapk.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tekvqaxd.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163chwawvdw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xkhwtkfc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163acdupjll.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163jvvxycib.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163emhkmqbw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163iufdcxbg.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jcdvesqw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xmzfefmq.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163trtvmlpd.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jooefojc.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ynxvomrt.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163rztrmgwx.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163uhzlkujk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163lhnvphoy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rrdaquas.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163lhdnbvsz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vpokuiit.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ehatngpw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ecsgfomo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163lisfpqfx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fzlussro.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163lnfvmrul.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mcixhcbj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xufedetv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163opyvcdoy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ovectyyz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rtvmazys.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zbjxmxwr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163zbpbifyd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163bymmjdri.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163slukaavk.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rfthtrol.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163djrmkxxk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cklqeeza.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jbqpfwlw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163hjaiwdvz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163lllttfoq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vaqhlfrj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xxqooizf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rzekvujr.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163euptpoty.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163yvzmngft.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fqrpmyoz.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163httkxrfv.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163idjoxxxv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163eywuilxy.html


<!-- 参考信息 -->