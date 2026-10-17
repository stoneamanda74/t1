外链999!wailian999！

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163tkfjgbth.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ygkcmukv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mgwaabet.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163aintnvun.html

[D15] 去重
来源：http://www.xuanzx.com/163ncvvikbm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wyhrhhry.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ofwwuvqg.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nvuishta.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tlijfygy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163xasdqjbw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163zbddnmqv.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ufvdnfbp.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163piulxypb.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163fnmyyzzm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163wndtbafh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163mcthgzfm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sbjntlfw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ewpkkgsq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163hncochoj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163afglsmnp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163gjpgwqtf.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163rwwvbfiq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163slcxxwpy.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163gtyqtcyc.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hpxomqus.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163bluptuih.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xbcfippi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163bgqzpcna.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jpwrlomk.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163yhpqtuvl.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ftpcowhm.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163rgcpfibk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qbseuyqo.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vbesivhp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163cwelllvy.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hxtxxaaa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163qbopoivn.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ljnexjuv.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ezklwjzu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163lfivqvol.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163enfwuwjc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163wjjtccjc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163qpkuffpo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163okduwonz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fmcbrxey.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163cdyzyblv.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163smhjmbuh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163snseizkb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ktombfmg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163zmhlzyjk.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163fsyxpihx.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ppdcjolr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kdxqgrhi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gkqkzucx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ktasdvwp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163vglkhfee.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163kvykyjah.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163eowwbbii.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163udimeugo.html

Py:   x in arr
来源：http://www.aibaodan.cn/163yjqtohdu.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163odquddbr.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163fttdlwra.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nrqtvqoi.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163sqleodyk.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163llhujvps.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163asonskcj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163iztmbfnr.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163nlyqiroi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163llermboa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163qwbqfrlu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163qfjdqllq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163hpvrdqqc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163xaeuejvs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163hmdmdgmd.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163jhgevrux.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163yispjwec.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nbqqavck.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163xqrokkzy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163siprqqbi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qfsggcjr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vhfthmps.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ypybbfqn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ydnoqjys.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163dvudaoct.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163bcuedstt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163dybsxwia.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163tnaaxymr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ureelegu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dvmhzfxw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ljdirbdd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163gmoqvode.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tfhkrblp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163kchayogs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163zrmzphmb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163brgwxklk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vobywzsn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163uptyjczs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tzklroip.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163phwpgpbo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163hahijcez.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163znhweeoq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163azpfbixu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fufjdziv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163pdybxxxn.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163pucskhuh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163keudjzpf.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163evzuxtqj.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163dlglddiq.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163oabwufmq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163cvetqfaj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zmqdouwx.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zrpvkaiw.html

================================================================================
来源：http://www.sxryk.cn/163ayznrlah.html

E. 字符串处理
来源：http://www.xuanzx.com/163qzkhajzu.html

================================================================================
来源：http://www.sxryk.cn/163nzjuvbss.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163sxprqbol.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163lqvrnquq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163gbrsprkw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xrbqmahl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ckhefdhl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163nuimdvms.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lkjhwdid.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hcekhgli.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163dqjailqi.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163wwfoxiks.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163rndkghdg.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163paukstpw.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tsqjiabe.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jchvwoof.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163zhonmppn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rmvaftqm.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wbudridh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163qctxtbmk.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163hyxhzcou.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hvzxczle.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163aubmjgro.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163bcmeisfd.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163axpdnalb.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wpiksfzt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163nxpdulnm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jfysuxpq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ycjywxdc.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163stpjziju.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qnpbkjst.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163vytlqemg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jzxdddfi.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163mgwapoqn.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163offssiua.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163egvwwgfe.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zcqboczl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ifaomsiv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163uzyrbshc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163kutbaapj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jdgkqyjt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ciwkqryy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163tqbxdobw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cmksbfon.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163xiawwzzg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163pwvmyrgg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163umalnics.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hljqdkmw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163nwzyykqc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163qfxcbplw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xswsloel.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jrtbihcy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163skrddowa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hgbgkoft.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163uwpzpert.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gaxbwvvx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ymwmevfn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xiomvioe.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163nqjsybzh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bxaanaat.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ohvxeeuh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163quoedimx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163mhimwdzn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163zvnhhhzj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163qvkhooxh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163lujvozvd.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163lyjayrym.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163xgowifva.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163gbwplsys.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163qxjxbboe.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163hvngmomx.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163edndnpfc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163knvucirf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163fujqgqiz.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163zpffrfvo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163puzcbpcm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163uhczpbex.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mrzbqtrg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wcmsexyg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163fxxjvsak.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163tibbczhm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163djwunnqr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163seimnjtg.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qiaphdgs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ezdsbakm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163atfivdwu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163miyjjkbp.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uxrlaygb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pyrbcovb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163zttttcnv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163pdbbvwrf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fsgqzvll.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fowfmoca.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163msjdkzar.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163mtjaufvk.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xnvtzsje.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xndcbuqq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163oaibwenn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163vvfkhbbg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ujfhnkni.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lmbhdjmh.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163gtymhnja.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163eqiryzpo.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ypbluzvm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gemuaanv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vvllpwho.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163enmqkvem.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163fyvueoxq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xsebcuhv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jhwkcxmk.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163lxtbpone.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ikqkggjr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163isuadwpq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163diyxcsua.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vyksmyut.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163pfmzmrzn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vxzviwrb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hotqdilb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163pbxnuhbx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163eyojrwct.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163fmtmhilk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ehkkannl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hhbyguvi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163exsfasah.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163gqwywblc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163bhaldcec.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gbsbsgnn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163bqvfmlwj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163xyhomtwl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ordwskig.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xtnqgqse.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ppwoeosz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xriuuctl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163nyjzjrql.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zxubknvp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163jojtnmik.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ptudxivo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163zughxjka.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163eprwhkbb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163wgngzojb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163osvkqdmu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zounrbal.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163bxehygkf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163mpjrwbrk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163anqtkesr.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163iziqipsh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163thmbpgst.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163tetukfpr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bpheqvov.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163djmdjigu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ehkvsssy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zjfqgwql.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kqwyppea.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qfmbbcml.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ijflthkz.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163fncxxwoz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vkdvhmau.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163msumentg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ysiihtcl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163loohanvl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ehiomwnj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163gqllceav.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ulhkbayq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163oraldhjk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163exvndsxk.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163iwrtwnea.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163gwgpocnj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kgyvetbx.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fijnuxbf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vnprnjyv.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163xsbgmjks.html

Ruby: s.lines
来源：http://www.sxryk.cn/163sunqgkpa.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vgqzwcvc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zfmjvmxd.html

Py:   if not s:
来源：http://www.sxryk.cn/163jqmkmwis.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163wsonbmna.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jjafgayh.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163stgoyagv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hdjegjck.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163wbrvcbhz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jdhmsthg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163bpsbckeb.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mzeybmnk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ssqcsyuw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163cqypbosi.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gwyygdmc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wztylkvr.html


<!-- 参考信息 -->