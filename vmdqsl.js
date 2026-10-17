外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163smgvjsgy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163vtmypeug.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163jagziaot.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nrsqsunt.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163zcutjzcn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163nwcdbsca.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163axypvnre.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lemkiima.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vlixujbb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163fwmrngoq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xuakutle.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xapkwsvx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hmqtikbo.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hyknfjlk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jkluswlk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163fifyvliy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163mogrfldk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163osfjrobu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163divnqqld.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163kfsdrerb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163rvbucdwr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163divfvnpl.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163kppgcaeh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163tauutlqo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163dufwfqsa.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163relpcuen.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163jnvgwmll.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ipbjvyxy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163seqlzqky.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gzzcqpan.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163lzwkmodj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163fsrefmcf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163izwgcagu.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163agzlnkoi.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163bqsblicm.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163lygzdmdj.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ojtvenla.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163cwkevdlc.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163yusmivpn.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ybkcickj.html

================================================================================
来源：http://www.xuanzx.com/163eqmmfioi.html

E. 字符串处理
来源：http://www.sxryk.cn/163bpzysvrw.html

================================================================================
来源：http://www.sxryk.cn/163bcrqjgqq.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xtchgrar.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zsynmqwm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163egetzeei.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zrcgpkbm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yoenebeh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163xkqodcmv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163itmqlsrz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163cdiwdlwe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gdpbuesg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163iwzhmzrx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163wdysotki.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163uomqxppc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hnntksqn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xaqsyaox.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163epzqaumn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163rubllrlh.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ftsbdmvl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mjlzyvek.html

[E03] 截取子串
来源：http://www.xuanzx.com/163yoqnpxhm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163bqmechrn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uiyxgobx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163vuclwder.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163cciwlcrw.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kkuzvukv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ouvlnhra.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163dzwrbshh.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zlvdnhgy.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163tvnrtnmw.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xuzeehvn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163tclyvjpx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ykewldhj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kievjvtk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163hgpbbdcf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dbolukcp.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163fvhpviyd.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163uizqllmb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163yulmolns.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163amlwnjlz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163iuvepcmm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nhaeewti.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yrjlzmep.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fizcwuuq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163pebbjxwf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fjvetwfb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163bxcffikc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qkgylcqk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163smxmpyew.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fjkotzpr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163woxckwdb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jadlosux.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fjsxarti.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163cebvhdrg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163gvywrxho.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ehcloolc.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163myozrymg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163novwziom.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ehwaltnx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163befswetr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163rwonctnt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163bfsoenxw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163uigjfwil.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wgflawsu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ywhycnsk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163gneblafb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gdiapjea.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ssrbwyfa.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163jcxvfbkz.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163rwxurela.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hbtvkrck.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163cfbnsgaq.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qnyfilvy.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163nwxuzkyc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fcxeavrt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vvwcwufr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163tznrjfmu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ccefvxxz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fiviufmw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163atkhzsio.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163gainkmkr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ngfkftht.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tqnibpuj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163msllldcd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163cpxxeroc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163lxrrnagv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fnzzvycg.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bptoybhy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pavwjvhz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163rnopnmpg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ebkngett.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163puaaycqt.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163bwunrwdh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163saykvway.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163fgundadg.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cllrxlbq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163asgnhpey.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163xdufyhoa.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wfofblwy.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163gjzxkgjx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ujxfwrfq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163plprnvwd.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163eopizrwy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163puofxcsh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mmzlxlfn.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kfgzisxk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163fkrhsyym.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rztwvnmt.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163opgctjyk.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163eevjemke.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163lmkrjcsh.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163qqxfvwqb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nwmuyqxt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163racbocic.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163htwwohwr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pjsclaep.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mcbkvhhe.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163roocszjk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163frtlcpen.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163fnsssabj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ssorjtyl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163cgrkrjst.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rhdipgnu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163fksjowls.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163zqawlfje.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kpljnvgk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163nswlhbvl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163aofcpysj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ixtbmurk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163orptvtss.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rdycnqfh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163cldxjcwe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hupwymha.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vswlpuhj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163anyjywrs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163nvortkmy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163xhcoaltq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163jcfljhes.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wzvffuxd.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rhntgkdh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163sqnkcgyb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dsqxjqqt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163vjbvjcbf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qqfjiwhn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jxreiivj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163wxqehhxv.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163fdiltqds.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163macqrkdl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163iigdbmwu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rdidavbf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xnetudwx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163flkkhfei.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163jtqgaqyt.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163yoychxgo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163binujnoc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163jidwmrax.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163irrtrwah.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qjkvwoen.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fviaxess.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163giyddxod.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163sihmncde.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163oxsvhwah.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163aoleniyr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wfkuslpn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163szcllesy.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163punbpaxx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bslgpeif.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fcpcsecg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163htkughqe.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163grmsmzlb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ictktohm.html

Ruby: s.lines
来源：http://www.sxryk.cn/163hbpxvigv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kfqeinxf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163fvpxwcwr.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rbtrvyjg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163qzfvlvae.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vqygogjk.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ggtsudzo.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163sqybtgnn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163gmcynobu.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163zwbebeit.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163gezvjpbk.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163nwjvytri.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163sgajigeu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163yhzipzpd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163znkqyivx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pdvppjyq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fvgqgmst.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gmdtdtox.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163skxqevyx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wvqzhoge.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163npwdmfdi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163xmrvfumh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163evshizne.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vkcuicwz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gjrzdmvx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163vowrjzjh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163dcmhkuku.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163obpoubrg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xwcsgnlg.html

================================================================================
来源：http://www.xuanzx.com/163myngfqpu.html

F. 文件与目录
来源：http://www.aibaodan.cn/163wxvsubmj.html

================================================================================
来源：http://www.aibaodan.cn/163kwovsnge.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163llwpiqlw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ucuwkaxx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jxodlxrg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163dmugdqfa.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163yjwdrdww.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hdwteegj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163gyufsewy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163zwzykdya.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163dmnxlsxr.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lzzczitx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163pvgsicna.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163aqrnyduk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ncpfhwhp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yatzxebl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uhpdkgex.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163reunhbfh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bqgwhdgy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163jozdfmfd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ytlwwdqa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vqkgpknp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163iielgttz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fcxvordt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ciyvzyzw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163gqsefqdi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163oxuldkkt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ipmmhbpd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163abxroodr.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163sixqtval.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163eknpaoxk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163sdtteshv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fjxklmnf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lsaetqcw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163tzpeicju.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ebgyhzjt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ioaqqpqi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163smdykylo.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163sleubkqg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163avxawhfk.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163flyilrbd.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163azegphsq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163chrijeaw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bbarrtwv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qwcirkrt.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163scytajsq.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163dakzcsts.html

[F06] 删除文件
来源：http://www.sxryk.cn/163cuphigef.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gbisciad.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163skynlnme.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ehpeartu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dwraosgi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pvhrdlaf.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163qbdymcpa.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zkiuodcq.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163tcorurdv.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163rktuobzi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163gnhhldat.html


<!-- 参考信息 -->