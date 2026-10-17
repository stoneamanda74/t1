外链999!wailian999！

Ruby: a, b = pair
来源：http://www.xuanzx.com/163hthnvowy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jxljkwan.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xodpsqis.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163aujymwzz.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163qnmerlqv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163axfwbslb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163omdvebzc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163yaofuggv.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163eyvdkein.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mvgwhcmc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163pumokxiy.html

================================================================================
来源：http://www.sxryk.cn/163okdcmspr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jshhxsqb.html

================================================================================
来源：http://www.aibaodan.cn/163carejjhl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163nktalour.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163sygkhdyh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ughogkwz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163afyhzyiy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163qedxkign.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lzllirwe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163sbxurytk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ultsugad.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ytkarsak.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163iaumunkd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jrsuyisy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163cpmhugys.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dnwkaubv.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163olpnwioy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hfsrbxim.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dangnmrd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163refbzonw.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bqqvwwzd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163jscrgyft.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163quzlyahq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163byigkqyq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163lxnhejcc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163cpsmtdkn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163dnifqwsn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ngzpwejx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ibwfyqcn.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vbgqluln.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vlemvrcn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lfcsvymh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ltcanrvn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xjrwtkka.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163foxklzyz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ghrwsbkh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163knsxnrvb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163bedoxssq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fwcrkquz.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zrruivzv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ejqhpmea.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vpxupigl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163hefecewb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163jiitfwov.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163facjaohf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163phiznycw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fqrzslvw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vknxgury.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wqjvmbpc.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163llyxnrae.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wajytqgy.html

JS:   arr.length
来源：http://www.aibaodan.cn/163izpvoqyv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ymyjlkno.html

Java: list.size();
来源：http://www.aibaodan.cn/163fhtjrjnw.html

Go:   len(arr)
来源：http://www.sxryk.cn/163hdylaufz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163bmyjencp.html

C#:   list.Count;
来源：http://www.sxryk.cn/163krpnloaw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cbxavpcv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163nsucfaot.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163igbhrzft.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ebxavnuq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kvourvyj.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163voishwvp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163uhyyayqb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163aqtuisyk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163imfnerqn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163noftzrqo.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bcolgzek.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nriozros.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163nmtsorqn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vybrzxty.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mgiqdxat.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163lckgfvfl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163pqzpaggz.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wqfwedxh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hzvvkiqs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zqghamzs.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163kqiwtbqf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jpyhbaol.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163utpnjryf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163gzajsbiz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dmcpxbkv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uhftixnw.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163kamurkqa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bqvalkqi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rirqbstf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cdwvhaxs.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ifpgezjt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tpwmamfg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ygejiezc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163fpxatokp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163lpffouvi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163zzsnxqby.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fivzeovu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qjhamgbi.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163erywqvng.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163rznliiwz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163otrvikfo.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ymqmvpce.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bbwgsftq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163avrhyjtm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jwkahaex.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163omcvabzy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163khgogqpu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dxtvqrpo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163oyfsbegc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163aaxhxpug.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163dldiompv.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163zvzrjmpt.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ktyyfzdc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163lyhspknx.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163krntrnsj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wzhpizbh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163jgapdntx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vkjfzctt.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xsjdmjlh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163drmhmgxg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jcvywssa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163kztejota.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163sjgzvlul.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ugluzsva.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163kdmqlxee.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163lnmjjftn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kviziwhs.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163orsnwzba.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163iqsycpak.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qkvwsltr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ospkvsmp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ssmdlfwx.html

[D15] 去重
来源：http://www.sxryk.cn/163upbtcspl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zbivpkba.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163xcxrdmro.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hgxhjcsh.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bexlshes.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163bwlcagdw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163jadvwrlb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163alsjryqd.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mlxyzeff.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ggrmpgxj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163lwhsywga.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ghrwntku.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jgzanvxa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hedxptdv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163dlfkzwpg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163yjlwfmbr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163dfofvzhc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ivapxmkw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163bccowgpr.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ufspiwak.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ucylrrny.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163zyvyrvat.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163tlrugqqz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163urilskxn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163oxcjzrup.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163rzfazjyf.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163urmacana.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vjgjhjzq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163dpvpunif.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hokuarwd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163avcyrcgd.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163degztvea.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vxgsbcun.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163yyaukrya.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ghqtsvcx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xgktrwut.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163tlttdhes.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163byyptskq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zyjbeopd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163eiwukdrk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dimfarpo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163yrejinzd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163djyidycv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163oochqavl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fepwopof.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163afnuaynq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163rcogjrqu.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163smedlweh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tvpxwelg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163epqnccri.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163tkyjxlhl.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163igcbnkiq.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mkuxewfn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jxqsqplb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dhscmaoh.html

Py:   x in arr
来源：http://www.xuanzx.com/163afyudkvr.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163gkmtjktq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ogfksfmt.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rfzrkseu.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163pmasiflg.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163brfniwuh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lodjdask.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163igipendk.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rxhntzhq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163tceyfcdc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163gwejkerw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163iqcqzest.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wnuotmac.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ocxdmzpb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ylkwjxai.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ffnymcie.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163hqttgfjl.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ilrzuxix.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163lxrufbkn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163qkfogjpl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vmaalkki.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nyznkoop.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163codfoqri.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163uwutjdlz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zyhynkge.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yoylaada.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163bcwoxkam.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163efdusepp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ubrahfjh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gaeiedxu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fqigtmut.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163skrzduzr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163lvdekiom.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lblmzgbh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gkyhpusu.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163piqigejl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vqzvrrba.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mkftuxqj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163imegjnra.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163uyaagomz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qakksawr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163uqgadbee.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xwbearpi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163tmredrsr.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ndrdryyq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163uyxwnpay.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163tydjfuoz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vwllowfn.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163zkjhzebc.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pawgkikj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163kpeolchi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163hriglcin.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pihvvwku.html

================================================================================
来源：http://www.aibaodan.cn/163mgmnwhlh.html

E. 字符串处理
来源：http://www.sxryk.cn/163wwmoeulb.html

================================================================================
来源：http://www.aibaodan.cn/163hvctnqus.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163tfvkthyy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gyoulkqf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163htdvrxef.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163frqpsgjw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gbbjubcm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jkvvnfvl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163lmfqugnz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163odonwiay.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163wdswolij.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163eyzhyshw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ycwronky.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163vljxgcit.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bbpvvprk.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zhpcchcf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163goydslpc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163hcrkotus.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vqofabyf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163vflsdsrs.html

[E03] 截取子串
来源：http://www.sxryk.cn/163qoxzjkro.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163yydmiqwe.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xnxcizqu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163uelxxuga.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163rclokhmv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gqicnjtg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163hjxezwsr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wuunydme.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163stbkdeco.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163efjvfeha.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ntrbphlb.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kptcxugr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zluthfmr.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163skspupig.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163qujtcetk.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163mhjxscvb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163hwupvslp.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163mofxajtp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163juhqexqb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ydotuobd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zyheggaa.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qedcqtyw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rzrodizl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eiqzdiez.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163fngmbits.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163dehwmpit.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163neenkcip.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163jpaeqmxn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163uammkdax.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xuuituxx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mmzsapnn.html


<!-- 参考信息 -->