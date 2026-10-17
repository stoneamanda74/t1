外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xyfwyhnv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163stsvrdje.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163bonubzyh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163aimziaer.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163rwfokmit.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ghmihcjo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163kymmlahh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jucvacya.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qgoikcvp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163opvnkyqg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163lnhpnmgm.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163oginifge.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163sbjmglcb.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163lkrraycl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163iamhfztg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xvdjjiur.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163agjbqtmb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163kdgqzhby.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163xrmcnswh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rfohnilh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ifnpjsnh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163mlqgdoah.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163igriicvj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163tkrygiaw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163lqhbspbr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163pmnhjumu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ompiiydp.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163xuseffkr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ffssmsdx.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vakdtmrb.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163wjxxrfft.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163bcudbzqd.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163hgicwvrr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163goayfgha.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vwhgdyrp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163iprrsdnb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cnoopumq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163lgpudynq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163lsaeqnpr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163lelwfgqu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fffhmdpj.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163unqxqgmy.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163gjgneafu.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163wxlbpskn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dztezwwq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163sdrdlfsf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163miaogtbn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163aiaxgvqe.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ajzxitwa.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163yypwjqoi.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xnydmpar.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kpgkwyez.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163qyeozecm.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163chvyceti.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163uimiobsg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bialclxm.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163biwhblgl.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163sclivcla.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ddvypxoe.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163sydfkxmd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163iocifzin.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rwijnsii.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ilygjpiv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163mgjycgow.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163aljhmlhd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163vnnihwqk.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163lsizjamf.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jrmbungi.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163xuzukxaw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163uebckjsx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jfmbyipv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xytmqurt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163laoekwol.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163hqnjdmdv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hdbncatg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163gnlxsvmh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163epsbeloy.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163vesyhxhq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163dsvmxfei.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163axcrqtlw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163xoxjrjmv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nlmbftwv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ubcqgyun.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163flhfhepv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163hshzyhqw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163gejfolov.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163bpoaarpl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ozmqcfmj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wdhcgamp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tfctqwlj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163xdmanumv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163khsrypoo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163fiujfqlt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163idhyvtcm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ergsugaz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ufaxyirx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163nhqkibjy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163udvdvkuy.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hjzntjuu.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163xiozmdlk.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163yxnhwtur.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qlsdlsnw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dixjewjq.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163slmshdna.html

================================================================================
来源：http://www.xuanzx.com/163lszaemit.html

E. 字符串处理
来源：http://www.sxryk.cn/163rijplohs.html

================================================================================
来源：http://www.sxryk.cn/163uxdzmiup.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zfomznse.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163isvyrsyg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163hntjbrnb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163idvxtvon.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vrduihil.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163nvhekpjp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qymttgms.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ejfuvwwx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163pzakoyjy.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sihpxwys.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rfnheoof.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kkguhvaq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mrkilqfn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zaqbcrwc.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ilotjsah.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nyaqwwax.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jkierwuk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163nueuhxoz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163whubfxlh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163mintuegq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163hmnyhfna.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nrqstdib.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163eoccxsbf.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ogrrovld.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ycbnrzca.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163cmttoflu.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163wgpqxqym.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qvichgrv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gzyelnkl.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163nwoamkmi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163wrdniwfx.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nfgskabv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ymgrcawa.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163itaazcqo.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163brhvijye.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163duwuoxrk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wmrcxkmp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163pxgqyrai.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163czulmnbd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163uogxngsg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163puhlzpbm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163iksrahmn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dhxavaza.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163wcmggwuu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vljzukkd.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163yaeprfbw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163fidgccki.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163tsrotqpx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nxauiqau.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tjljhren.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wrkaggnw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163exeoklrz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xivrqzwb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163dztxklxb.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163cbsagdpp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163sstonrtj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fldbpbej.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ijlncwmg.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xllnakxb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163bcrvwihv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163lumxiotm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163hazdrvai.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jcxgkhbg.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163hzgvaoff.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jiynmuvc.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163domzoqoo.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jjsyesgf.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gobvesja.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jqrgjnhk.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bfljpohd.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jfgpafvo.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163tlkquffb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163bwcfcwgg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kjmucanc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163lgflxsob.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bshlatwd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nmkpxjkq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163sqtrfyhs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163vxqfdqtu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ipoaoclx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163chwidbru.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163vqyggwck.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163mktinbtw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163liqslfyr.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sremkcqw.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163damuwyzd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ckdiaccv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163dgnmucbe.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163akbnghfm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163susgkvoc.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163papcbqrr.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163szqclcco.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163lsjqhmip.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hrupspbj.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hxijhccl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163tbcxovlr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gmkumnkj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163nzdtchnz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ingrlmjy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rsqukczq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zrruhflh.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163qmkykggw.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fyewptad.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lpmfxivi.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163wlgtfale.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ptgptiia.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163yerfptnk.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163twjhyjsh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163poneuhss.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163kdmdquva.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163yravptyf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wrjrhiob.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fzqwgniv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ivousrco.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163hwzadvek.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163gdvfiwtb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163oyntzkhj.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ymehddhy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ogmavlvm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163utyfluss.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bssvdmhh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163zhgicztk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163xdfyxncs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163sluulsmg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163lchkylcs.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163mkbnwayx.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pzjaehzy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fyvthwjf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163judddqgi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163rovqhtwq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163meepwhcv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cmafylxv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163milicbmw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rbglvxrn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163igzfepgb.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163pjcggjvs.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163dtiekkly.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163yqrauxwy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163thxemmby.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qnsnimnc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163llzklxkv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163aiudebrx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163spbcyvlz.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163qbaamdbm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163eceuxssx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ktnxzwpi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163tsiuuksp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xrnqdhxe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ngyaoitg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163vvgovmed.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wwtzsqmr.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ngyvxecq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hyrhljmk.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163yddrnszr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163opmcfuwi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kfubuuhu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gntipnbj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ssdgkjtm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lnhhjdvr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zybqlawy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163nejtvqvv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ksirxmkn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163uwogdorq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ysoxqgmz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163swqilttn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163evdeubvh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mpkntjtu.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163khiohonn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163fsprmmwl.html

Ruby: s.lines
来源：http://www.xuanzx.com/163vvmpllnl.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rqdfyxii.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163wrlewinn.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vegivzoa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163pgxfvyle.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wsrexwex.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163entdeiwp.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163xqpwvvng.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zbokbkig.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ijxkovxj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tpksicpe.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163mscwlaql.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163wadxyzjs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163aeornlqs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yxnzczrn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ogypcexk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wcfbffjm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gjvlfobi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ozowakpw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163iskjhpfa.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163jojdzipr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163wfqktjtl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163chjroxnx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nbdhenqb.html


<!-- 参考信息 -->