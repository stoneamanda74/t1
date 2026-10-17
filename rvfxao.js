外链999!wailian999！

[D19] 按字段分组
来源：http://www.sxryk.cn/163fnwznbqe.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163pqxugnon.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jozfobay.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ilarqunx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ktfvhkzz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163bqudpcrl.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163phkpuugu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zchoodlu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ofloyhiq.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vgkmmguu.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163kvlxevpt.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163pkqnqlxp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163oqqqlpkc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tuoicrhq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ockqmfbs.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163spnasaqp.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163seackkel.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163uedrrfvo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163atufpwkh.html

Py:   x in arr
来源：http://www.xuanzx.com/163hrqcvdhh.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163solawqgx.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163axjqkslj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rhvmxbqd.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163aqofqnbh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zrtgsszb.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jleappcr.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163shbenjsx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163nmgjicdo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ewwbtcru.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163jyuzvbla.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163qcphyehk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163wficqcja.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tyymcbxd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ecgxdiws.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wybljygx.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rqnuurtx.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163omnnjyll.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mpagueap.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pyityith.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wyocdpfa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nntfjcxa.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163iqbftvik.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ktxbwdnz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rcpslzaj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zhjezmhj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ilrtazvc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163heuprfat.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163yrrhmapz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163vlvwjeaz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163cnvsyoxo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hegfvkze.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163mwlnqfdm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163krbcfeaq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163mogzuuhv.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163nnuvegkh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bszaueus.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nkqqbhwg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jofajkam.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163taumxero.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163doxvggdx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163mzzwzggu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gdsdbljh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ekeulvsb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163rpvuwrgb.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vgxluevc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pmshmvpg.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163guutkyun.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zakiidmd.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ohzcwrvf.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163odhqbfvu.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ojqhdrsx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bghdvyjq.html

================================================================================
来源：http://www.aibaodan.cn/163huoaipng.html

E. 字符串处理
来源：http://www.sxryk.cn/163dadvpsls.html

================================================================================
来源：http://www.xuanzx.com/163fztqbbzy.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ujsultqc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163xotnfqmo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163yijqfqbe.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fpexdscp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hnlchbwq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163cunhicig.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163cljutngo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gpmcgrkr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gpjrqejv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ttlzdfnu.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jdquowaa.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163yvkhiwls.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nzuspjgn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zsyyvgds.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ctmwvzps.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163cimshxqk.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163tlstldjn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163kuxpwmjr.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wjemahuj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163lstoklwn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163vxlkvazm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163tlthkknw.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hghtmkvu.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163gqxfwhpb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163fksrwnei.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jpihktql.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163faqyebxu.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163cmvlxblp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163apzpeheg.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rtjhyhyj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163bpcxoogc.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163unegurpu.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163gthigoqm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163eofdrqst.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163hgogyqzd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163essuhpqp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163xaauytax.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163icjkyaut.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163icvsqolj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163iddvstvx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rxwgyfgx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eskqrhjn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wuhktcuh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163sjuazthz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163joyfphif.html

[E06] 替换子串
来源：http://www.xuanzx.com/163lwwlilbh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163fxzeigji.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cxdsrezt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ymwlnnay.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163veuqhehp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163atzdlsbs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wyjkcuvd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163eqdpezas.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rknludlg.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163njrfdyiq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163iupllmae.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163funwakqc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163yqpqvukh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mygexdjj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ovuiokqa.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ytwbufvv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rewlaaui.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hjeaorqk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tzxhnscs.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163tqgggrbp.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ftsuxhlo.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163keybinvd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163oldecpfp.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163euiauyyo.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163luivseue.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gdecpaiw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163kqoduvoh.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dtqnutrp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163sygvexjk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163mffmxpzw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ewmlwbic.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gwnnyqlr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163bipnjdut.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163nsayxrxe.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163phgdcdpi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jqdmikjw.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163jplpoxug.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163uixfdare.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163wmlxmsmh.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tfvoiipw.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ydmyvwiw.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163oculmaqc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163htiontbz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mhweubgs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163civwojgh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163gvcgopoo.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163hisycddx.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xqlhtgtw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163idhcbaju.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aocmeurt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zhaohfdi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163eaiapgym.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fsqsewxi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uqglvemf.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163pvfehsgc.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ptljsnio.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zabuhgve.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hubsskah.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dedcsaat.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163plpwterz.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163oeagqyoi.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ipyztufx.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163xrkbdxzi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163jyhxxgfh.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163bemguplm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rifloeth.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163maztvmaw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ihxmbglw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163srgwpvpn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ognzrdbv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qnuraozt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163csrniyky.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163plywrsfx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163yaqxawqd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hdjnxynw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163kbgjgykw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163brtfnmhe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163kadxtbyu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163poynemjy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hmthdhwi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163lsycoeld.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163kcgyulga.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hzayvxaa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163unehqlys.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ihtgxsmj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163nvfeowkg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163xvahoetb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163jlsfyhpz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kadjccbo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wfqokykp.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163scraeiiz.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163oimltoxl.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163cbmysrqr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kjxojuth.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ktonqzeh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163cxtescqg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163bzugaptu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163kvyviztw.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163czzsfykf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jffvonre.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163lovamiwt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163oywjpaph.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sdlwbcvi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qkduzkee.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163frjyigly.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163dumhfstv.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163btyknpcd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163lotqhcom.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163lfkojltx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163bdiexgek.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jvwlaylp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xhzghdlr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163elofqgha.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163aemvbdid.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rhpomskx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vwwbufpf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bkldobaz.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163fhghnhel.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ljmagsvs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163stbjyvrv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vlvztrko.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kvxfsqys.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163oyglrqkl.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163hwxszqqx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163mknsnzfa.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kvxzowlh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ynasmosr.html

Py:   if not s:
来源：http://www.xuanzx.com/163nyroprer.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163sdwqwwnr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163dcmcheib.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163gwqduuke.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ptwgclim.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163smealweh.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163udpxzjig.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jfeqhsjs.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tuzqrxsy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163valzpkdn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163oxhzsjlc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ehirglqi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ueuhonsk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ntmmcani.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163eekpgmih.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163halhlfnq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xumeabqy.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rkuwdhsj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163dvdevbef.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wycbqvzv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hoisfpay.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ytqrjfsg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163yrkejzri.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163yspgrkhh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163lvwegdpz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lwgwgjbn.html

================================================================================
来源：http://www.aibaodan.cn/163jrxsbqwo.html

F. 文件与目录
来源：http://www.xuanzx.com/163vtmjzyhk.html

================================================================================
来源：http://www.xuanzx.com/163sujxqynm.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163usjbsyip.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163glkxglcm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163etpkitxs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163niyhhcxa.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wmgjajbo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ecokztcx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163hwcztsxa.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fjidkyzc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xqfiykoh.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zkmiuxcr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163pubdsnvo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rzptndvx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cauhbwec.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163serwksom.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163frjmcgfi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kohqqrkj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163xcujnyfw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163oxuzacuo.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ihsopsnr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163bqnuycqg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163dnihnhro.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jusrqozn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gugfoevg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lmzxseia.html


<!-- 参考信息 -->