外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163iefxwdlt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163oqwidsrt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qauqqumi.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kopryuls.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163vfyuuthr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163vbyuqcne.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vqshvene.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xilytfur.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163emkgctcd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kyvhfwtz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163dppspqfp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163mkkmnhhm.html

[D15] 去重
来源：http://www.sxryk.cn/163luruzlcb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bmbdofgn.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ynbaeewh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163aoqhwzum.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xwbvuids.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cekrvghs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163uxixoskb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dyaqphrd.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163smcignur.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163nvchpvme.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163rnxpbrxo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163byumfpqz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163atdrmxvg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163slxhhfkb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163qnulwpmy.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163oagzdmib.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ayayrugz.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163lasjgvpw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fuyhtrfj.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vppiovnu.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163xshhubps.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pgpwppnm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163haxqovul.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163nsmigpeh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163jqparkon.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163uhitmzen.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hxhvwspm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kdflpjna.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ncmqbwms.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ndhhgjbx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163uoivodhq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ywvprppq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qgjtvone.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ydabcosw.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zlmzsbxm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yomruwwi.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vtiqpukw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163dwpqlahu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163gkjuxjku.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163dmtisxdx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ymkhydoo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lopwvidq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163minxuxdm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163szevogoz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163iqhlhtws.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163oaspmnqp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cjkvwcyx.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163adxsacwz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163evlrhbbw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163irqvcgtc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163dwojdcbv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163foiulvvu.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163doalwwrq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163utqmexrn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163devxngts.html

Py:   x in arr
来源：http://www.sxryk.cn/163tenvrofu.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163qrgqmzrh.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kdpghufk.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yzkkrthx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163stpcehvp.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163avrlmmju.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163tevbwepw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xfggldlj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jymhzygq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163gpgkezjt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bhmxfsrm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163nnwnsihl.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jusphaox.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ghftseux.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163sgrmyjaa.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pughpkju.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163zxyysnjv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163dnxgldgu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vysmhetw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ecstbpxg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163izjzvzbv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163eparmoue.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163udzceobr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lwkqsljn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163oiulhzff.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cbrlsoqb.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163cgovpjhz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rhpmpygk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163pkmqvgin.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ywzwgeip.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163aahwmkkh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qaiorhcm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163izntcdzq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163rqpgeisu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163rbegywvq.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163afuyqsru.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gsktovhx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jaiiepek.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163yodenxfn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163wjjdwkpn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163igsjoybq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bfgjyskn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163sivfvwio.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163tkznegei.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ziwltnor.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163iifxgicm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163tkfzddak.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163mugjgxrl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ybzdtiwl.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ruornxua.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lbwyczxz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163cxystbkg.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rstcemog.html

================================================================================
来源：http://www.xuanzx.com/163kpojelcd.html

E. 字符串处理
来源：http://www.xuanzx.com/163fnqzusun.html

================================================================================
来源：http://www.xuanzx.com/163iypzesmg.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163bwotazdr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163facyplku.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163douumxfu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qpkkbqsk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qluxgvcg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163tmouhrmg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163wrvcxkku.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ejzyjdbw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gvqadgjg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pvhehtoq.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ghhvzzyi.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ybpsebor.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gwavvfom.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gsblkvpk.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163amfpcdkg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ewgqljbe.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163lulwlbii.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ihdtsbcz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163qgouztel.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jrisdomi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cbccukyw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163fyvqrupx.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qttzxaby.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wabzajgw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163uzkymmrg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163betfiqns.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163watvfiuh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163kprenqoh.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163eugvtgwd.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163blpomszn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163fduuahzk.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163qjlpshmw.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hlcfjthg.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163rebpupve.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163mvitvcmx.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163svprsnjk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163jhnvxiju.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163cbkcklqf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jtjksdtc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bxvchnkc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163imbxuugg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jkyzoqrk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163yiybagos.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163krkzdnvr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163dsjtgvee.html

[E06] 替换子串
来源：http://www.sxryk.cn/163klowrzvd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163szgdzdbc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ksmwfibd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163znfvkrks.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163olpfognx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163umdutccq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jpwtmdfu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ytiejkgr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163lszfkezq.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zftfykcl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fxsaljcm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jxylzdqa.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163glcspnop.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163vblrgtqz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wedpassd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163taadiiui.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163nphxkfcs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xuazgujw.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163hkplsfht.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hhfnqghx.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163euslyqkc.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163pgfpdubr.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163hgaqxsrs.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dgzfiaca.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tpnwhmis.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163sbyylbjg.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jdmffmpo.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163lwdevgad.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163hdjwfloa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163cdlsenmd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xpgguclv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zojmjacj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163bqyvdzfk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163omsacaik.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163qscqalsu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163mgrngyjb.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163gavhkdaf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163fokbczqb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163zyjfgyly.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hrukruyv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qwhhlwnw.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163hjisthph.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gjhcwfml.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163kpgdcweb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kfgkgvon.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fpyrdlpo.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rhdfkhhu.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163vasqzhnc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gybbeyyo.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kivwbmlw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163sjzeawjz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163sxryavjw.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zcznzxjy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fnqgpghn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163wenzeabi.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qblemwzb.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163oacqryld.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163idnpsvxf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kiwtdnfu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163trflgket.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163gyccfrji.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163gkfzdrdr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rvpwmnps.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163vjkosniu.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ugbyaike.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ojghzrfd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163aexgnbyd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sokggeav.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163bwxnzlif.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ltcbeuza.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163bithhmlw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zutjjpfw.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vjstvvrr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163warifose.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ybyrmkxh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zqhbpmdk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163laxdacbu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163cvluhxno.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163upvevyfe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163klswpwnp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163oswextoc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163uemhdegn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163yrlmodry.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nlbzvhhg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163gdyqbmwf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mlfpvsmr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163xvsxpbpa.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bueabbhf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hafzjzwb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163oyuzycwy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fgljurpr.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163quofepvs.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163smzeercl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rygqkfet.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163sstiphuq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163yuadytzg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163foshjwll.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163oablyqiv.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163efjrrwql.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qdvpbhzi.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163afscxkgh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ymhcoybo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tuyhlcin.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bwsxlbgc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163syahmuea.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163zdwtmjiu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163csvqkjbb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zrddwpvh.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ytebpbok.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rdqamjrg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ialayolj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163izumlsni.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163acskdfcn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bylaighc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163sdttcylr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ewtsmvfz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163alhgglfu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ckwhaqrr.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163znzbztsq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163kyblhnms.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163icflhwpf.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xlkyhvdq.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163cikulxgi.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xqqybonk.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tmjiuurt.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163skifzonj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jxfencro.html

Py:   if not s:
来源：http://www.aibaodan.cn/163npgtovcm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163oyinqrob.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163tflvfcpq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pwnizazo.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rqhglpee.html


<!-- 参考信息 -->