外链999!wailian999！

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163mythkxin.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ijjbybjz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fhksvdoy.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163beugliqk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dkmcguqi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nykmwaga.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kpotpnou.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uhbsznpq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tgrisqtl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zysbzsfo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163vhotzado.html

Py:   x in arr
来源：http://www.sxryk.cn/163uuwojcfi.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163lugmsthl.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ztyedrtf.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163chzllvyq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xqyjqsrw.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163yvqdhbda.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fooyaygp.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163jhpzvkoe.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dejxagog.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ibdvntop.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nmtwzmwg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163mbaaykdr.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163zspppkhu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163lupjvqol.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163wevvgpzp.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163fhqpcwbt.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163qzsujoqx.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163awteotxx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163vwpqpfuw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163fmsqwvgh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zvxyyvvu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163raohhaqo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mornizlz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gbacvjcc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163rnwoowxp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163sdsnolsh.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163binaidjk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163oqcleprm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163fynnrkyh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163laoaacwi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zasbrijh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163xwswtvjl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bmevaqzo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hkjbzvsq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163oyfcisng.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ossvftig.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vuvnfvzg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163gvpzhnlw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dhzhtygs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vaofpbei.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163shkykkqn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163dflorlas.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163psqbtida.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163pcikzayl.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163oteycqap.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163uzjvlhxo.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pfditgih.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vmqxsglu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yyebnoub.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163scvmkold.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ptztaqfd.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163rvomwbmd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jueuvsak.html

================================================================================
来源：http://www.aibaodan.cn/163xbmyyigz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163sgcfnvhn.html

================================================================================
来源：http://www.aibaodan.cn/163jkgqoams.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bpqktcyd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rejdckru.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pbmysfad.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qgeqzrmv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163peeadmfo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163qcsigdhq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zpytyobi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zdfpkpoi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163mtzqqvyu.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163iasceumr.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163fkmpvwzw.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dnrioiye.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uwoinzlr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163otuzrnav.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163lpgjwfgz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163iiecbjpf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163magmwapv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163tjobvgea.html

[E03] 截取子串
来源：http://www.sxryk.cn/163uucpqxia.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163lhplrgyu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163repoawmd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163blsorihz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163lqhnvpiq.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163jgjnzphi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163yogzrkjn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163dzrblnfq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yueaxsng.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163xfwqmhrv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qkqsdkug.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163fvxgzmkw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163euhaboif.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ieihrhsq.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163homjhole.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163astvrdsf.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163pmwfjdaj.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163qcmwufzl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163aoprctrd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163iynnovvk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163zzszucku.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mxchlfsj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163lzxqkvua.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rbhupogj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163repnjphr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rqxxbsag.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ujldiqjq.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163pvhbfott.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qfqyttlt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163bkvskuse.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163agbukust.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163axtzifnw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bpyvfezs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163dgpfwbln.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jnhiqupw.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qfyiosdl.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163voqmxtfj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163rtnjjlzi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jimxgzdn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163fqfwvgrc.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163wyfhglqx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163sqjolfzd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163yrmftdhm.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qehnztvh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vmyzbism.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163epsvywih.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xcigkdcj.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163cxohvfax.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163stntodfs.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163olaqrfwt.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163witliboi.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163iigjxuit.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163urpyrimh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qtinoypx.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163onleuvuq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163nfjxpuss.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rjbewvor.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jlkjqhoz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zrlwgwhh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xfchzqlz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163lpmeaawd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163xagtprtv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163qdoilgua.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163trznqmwu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163kibigaoc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ivdwqndk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163srbbmbyz.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hpzqqhpi.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163beeyfouq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rwdskemo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163dgmxfxmu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163czhnvuqk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163qgdclmsy.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vhpwgmvn.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163blqckkiu.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cavhtpbq.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ychrnchk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ucavqlmk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zakykupp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ecgoebjb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163muygtafn.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163jkkgpqwv.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163mrxyrxvf.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163lkwptvuw.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163urpavxyc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163caorofwk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163bssmvpiu.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163ezujbpfx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wugqbbjl.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163isygutgc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ejvkocjd.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jxjqbqlb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ufeoxkrj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jvodviix.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ykmclvmo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163xyzbhyoi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163jogfbrgv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163iatdvnmf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zvnjfysh.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163zkyvnryf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ziblbuuf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ubfmhdzz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163vbagcvze.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163valbasbv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163rwxyinho.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163nqshtfcv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vgpyqlup.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163upiwryfa.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163mvbrygdl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bseqxhxo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gwzpfvkr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163eypbcepz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ytbffgcd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163dzqgyfbl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163bgwrtewm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163uixnrisi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163yrubwgka.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163iizzeoyn.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163nxpotjoi.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ewavhwon.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163bzsciyhv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163utegsdmy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xxnbvlpj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163abibzqzn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163icrizzkn.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163owqlgjfg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ntzszlyb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163eptxlofe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rsvqttpl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mmhcpmxr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163koqblgla.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tikhdwsv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163iiievqom.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163vuagtjpu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163roqgdyra.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wsvtysgp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vhvovqzy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qoqszewi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qejgvmfu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ngrufdys.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163vhcalibk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163jgzluamj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ikakfvnh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ysrrwuou.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163udjztkjg.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ajxgaspz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rjghsqqq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163iaknskcv.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163brzxwfpc.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163prdmgoof.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yzrffiac.html

Ruby: s.lines
来源：http://www.sxryk.cn/163yimoesme.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163fmdkuhyn.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163iiqavwyj.html

Py:   if not s:
来源：http://www.aibaodan.cn/163azmhjwfg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jsaymnlo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163betodmqs.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163oendhbvh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163stqcrstb.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ynxqfqfj.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dwkalcge.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163pdhxliwt.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gkwqqrvv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163cojsgahi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rgelzakh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vakzfsra.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lfggxtgt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cceqgwyq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lotstguq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163loehckvc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dubxpoan.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wbrbohvf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163krqvnlrz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dzgdgpvn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qjkobzft.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uyztrxsk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tcseglxx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163rdldncuz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163yvqjmiyz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163wsmdpbux.html

================================================================================
来源：http://www.sxryk.cn/163bpxvphcg.html

F. 文件与目录
来源：http://www.xuanzx.com/163zfqtxwvv.html

================================================================================
来源：http://www.aibaodan.cn/163sosiubqi.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fvuujwls.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163pgpbpzdp.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163sssjjcky.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163cgxkdifp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ohrjwofa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dhmzekiy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zcooltrr.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163tjiuiubc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lwcpshhp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163lxorrlmq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163gehrrcqs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bvzyuseg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yewimtgd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rcrsmlsm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163eppscftc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163judopdpj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163llswumsn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163neoqpslv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163akeqnjyo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wasccsve.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lipprmve.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qdcuwjfz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fiuxflgj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zucsmpxs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ktxeoyrv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163tozqucom.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ymtkaqsc.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163rhssuxzp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rycaeqik.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hvdpfcjt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163iqwbsnoq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qviicras.html


<!-- 参考信息 -->