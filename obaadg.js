外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163itkovbtg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xhevruss.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163kimsbxts.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ignhlpef.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qxoyjpks.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hcmbqfcp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163kzpsgfly.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163plcunllo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163eqzbxvlc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163eelwhgbt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163emsievkl.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163jtrmnruy.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163aqsefslt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163kxzxopcs.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163tugiwfmb.html

Py:   x in arr
来源：http://www.xuanzx.com/163huzfapjx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163gxwlxjlf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rnmvylqr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ymnixbtu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163odoirnzu.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hxaeiypp.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163qbshgrab.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163yqbxtfrl.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163trlszerp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ghzlzgag.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163zfpsxvqk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163uisdqlrg.html

TS:   [...arr];
来源：http://www.sxryk.cn/163yafzgaqf.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163fodzlfot.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ykgivdzl.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163iojnxpcw.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163clcoqsba.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163tebqlsaa.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163tugjesfk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ghdedyve.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lwzobeap.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wuzgxmrg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163drkrjwal.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ccioqgyl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fevpzujq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163apxysulp.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163hwbumkyj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163qljjycoq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ipkkyifg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jskpvmqh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zsgwjeew.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xolfuphk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163jjxojqrf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163fiikopkp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163unnunzwt.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163keleaxnv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163phyfaams.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163codukwcb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163pezsrbne.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ndhwyfce.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163yubsymzz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163cquxjcac.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163hphvctja.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163exibnjyi.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163jhhdkjgs.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rwnbeqgh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163solhlqre.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163dputfchj.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nctkaago.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163gukrhcyt.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163tacbnsvx.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163fslgivxm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163rqgmtcqt.html

================================================================================
来源：http://www.sxryk.cn/163cdejtypc.html

E. 字符串处理
来源：http://www.xuanzx.com/163lkbxbxkx.html

================================================================================
来源：http://www.xuanzx.com/163rcbsgomw.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xjgleyyk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163qsfetoza.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163wcersjoj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kzlmjnrn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fzwyxmjr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rwdoqgdw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163sedjpntd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xfeeacol.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163dqtfnbxq.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hpaaarst.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163tfwvvyat.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163uufbzrxj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163plflwrmi.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dawofdwm.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163auxsjglr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mufbiyff.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163tsdpwyhf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ttpoeprw.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ynptdqqy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ntwefhnk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rdpcqgmp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163qrsoyprg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kelfezax.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163sioqkxax.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163eozzcltg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bhtiunkk.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163twgdfsee.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163luikbwmu.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vtngplag.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163uliyurdb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163seaosarz.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kdjqlotu.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163argvcudn.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163othbdkua.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vvzkksap.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163eyjcbpma.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163cpgnrgoh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rytglxhp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xbjytllj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163orvkwdor.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163pfvlcrum.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kgdmyjan.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163yhklcwic.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163cwatmidi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163jewlqbun.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ordcuxto.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ocvdvtlh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ooirlofn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163howylinz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xyirhvsu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163brwvgbkh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dszyhfko.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163nwhlupnv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163raigsqit.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bymqzicm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163aeagtxhm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163lytfjney.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163kuqhfilf.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ejcfduja.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163qqzujdjr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163echfrtaa.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vbpuqzsd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wlzfjztu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bhltwecv.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163flogcpns.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163rewdikzo.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lybozmui.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163tuqnumhf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ruxwibbs.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hmaoxuct.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ztlychun.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163pktlhyaj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163mbpskfde.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163iryakiwz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163iuhvskwr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pqqiveof.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lppwsryb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163elhgiojn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163nfmbkmur.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mlvhgqzm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fiznyags.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163iywjzuem.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163odlrcfrj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ukdfsdug.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jlcrchjp.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yovlnypx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163wqyoxvlg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163pvlwtjga.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163zlytlqya.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dwkoofji.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163chofbejr.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wpgwhwlm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163isilrbne.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ivdgjanv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163sarlkcoo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163seljkybp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gkddzwaf.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163acnflahj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163notoiaxo.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163mulfyujx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wnbnqoij.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163iiaorblk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oqbnjjus.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ijsgtdow.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163tkyemmvf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qhbfisrr.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163nzewxzum.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163uzvktchb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163tmsxcgcd.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ulwgaarl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163uigxahri.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jhlcuskz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vtlulwnt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163okbzldth.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zilkjiym.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163kpdbxgcn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163qucecjpb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kgvmvwzv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163yymyoiyq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163uheonqxt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rnldnzid.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163gkwoclnj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163pjqbnmqy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163cwgqlqgp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163idnbngry.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163islmpjkm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zuyflosg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vzxnwzto.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163omzgmryu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xngmbisy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163bvbirnxj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163axbthosw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163uktudeto.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jkzaqnkp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163coyqgmyk.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163skmmqmit.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cqlzrwsj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163tduwgmny.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hawbloxv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bceelfed.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tpmdbeix.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163vflyzaql.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ymbzdwpx.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163urzlrbyo.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163pcwxufxs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dzgrizka.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ehvequby.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cqemffll.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cxxrqyrd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hdispqyu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tyfepxej.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163rkbteglg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wizdujly.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163yqggwmzb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163anqiwkmt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163qawbmqev.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cjtntaia.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fsthgohb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163klszympf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wfnbhufm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163dprnhywy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163scdbhvex.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163gufgyqed.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163eqsibedi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163dkaccadu.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cdpxwtjh.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cdticmds.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ccuhvhwn.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163wykrxgzb.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ljewiyof.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rihrmmhf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163jumkavfj.html

Py:   if not s:
来源：http://www.aibaodan.cn/163iffmkegp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163bfvowqey.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gsockjqn.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zucygfvi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163swckxrom.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163wtauyohh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163hxpasaob.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163apfsuxpi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qrpybdiz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163isxmwxcx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163dfkpkrqe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sdnvvvgf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eamybeka.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wtcshgar.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pljruiuu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163feuikulk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163blialzwk.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163urzzuhgi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163swbgettq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qbulmvgg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163dybstjif.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nsfoxzso.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xuxnvsqi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163xhukeevw.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jaoqdhre.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163skqpbycf.html

================================================================================
来源：http://www.sxryk.cn/163fzfmkoli.html

F. 文件与目录
来源：http://www.xuanzx.com/163mxgjfgpj.html

================================================================================
来源：http://www.sxryk.cn/163dhxhesev.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163zgpkjaxw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ykpiqfse.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ibkpnhgx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vjrbvxog.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fggowjbz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qlrbysft.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163lnvhvyxm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163acxiroya.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kcsjhchl.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163buzobskr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qaxrhswm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163zqilbzbb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hwegrcnk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sgkfmact.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mejnmisb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163tkjgaxlf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pxzlwjia.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163rdqwqsfz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vbqdmizw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vucibqii.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rocpaayc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zuiaekkh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ikuuuura.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163fhxhxxeg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163dfxmheeu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fhkhctdv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dkpaqmkl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163jercgnje.html


<!-- 参考信息 -->