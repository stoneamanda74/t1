外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163qrcvoxdf.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fbolqsva.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163cpwctwoa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xgpmsvzb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qrdthmup.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163bhyhcpjo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163cfuszyhf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163axoormiu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ixcaxyvw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163kitfatnx.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uogigyum.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vxqgazxs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vklikfsh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163momxwvsw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gparyags.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kgnmtxka.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hcyzoxis.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ssrtziol.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nlmwjctt.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163abeiwsic.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163feuggjtz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vkngxvtk.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163becfmbyf.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163qdxaypuw.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163qysbygpy.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163eifhogko.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xykvimrd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jypzlieq.html

================================================================================
来源：http://www.xuanzx.com/163lesrgapz.html

E. 字符串处理
来源：http://www.xuanzx.com/163zwwqknhl.html

================================================================================
来源：http://www.aibaodan.cn/163uoxjsqul.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163rnzphsdz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163bqmpwrvv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dbbwcmav.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tykjpuvu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rcbtlcrk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163cfketbxl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163leldcpjy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pehdkpfl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ytwlgorn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ryonrbxq.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163clwiivdc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163wzdgmofu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bdgaugba.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jioxivyb.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163sczqners.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163egybclsh.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163uumwzrrr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163hgfvecrf.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163uoxaxxoe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163hbzrndyq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163jjszqycc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gkrcshee.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wzctnwdw.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qmdqceda.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ewmnrytd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tseevvjm.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163mpktuedw.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vaoxovqx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163vfebqhow.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gpmgyjdh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ereflntp.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163gyfmuqmr.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jvigbpcj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jbtnvhty.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163oycqpblj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vimowzwp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ivfqrpdr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rmuycjfw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pymvkyit.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ivggkuyr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163arfvanhm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ohkorkgw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163aaegdxnw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163atrlbojz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163pqmfwrxy.html

[E06] 替换子串
来源：http://www.xuanzx.com/163zwxnpndp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163wgotrnch.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wvxrpovx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nqdzbnql.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nkrmljyj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qmkhdtkx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ehmdybel.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mvfzdtsw.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163bvfzarrg.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bunemxbo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fmfgofzw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kzneeuql.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163hhuailnu.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xrkazuhg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163rgjxfvzp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xocpouwa.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163qivzipio.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gaagghjr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163aljlvgwk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163vbdykcvc.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163cpnrvfxp.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163brhkklcw.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163uugckwme.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163mzlfrdyw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163uzxclntz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163djdmdirv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163guphgafi.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bsxybypv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rsfpyqjs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rbczhejh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ksqiujqx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163htoeqwnp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163szcwdfxs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gawlcrxw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163lhllxpff.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163vquuftwq.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163oeycsbas.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163lmvxbrfy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zmpwzpsm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kgwfkqkm.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ghknxrkr.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163lmwrzljk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163cfczarvf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163bihjvpeg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163pxowsara.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163cwcpfbje.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163jmtxnpqz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qacpkdbf.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cuosodyu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163uyxvouqx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163qutearew.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163rllduuux.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qvmjdgqm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163grkbdqkg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163gepefrtp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163toaveydg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163yowythpb.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dhginhaw.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fffrxovh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163lwltliss.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ipcbmdjn.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163hyvqpjvt.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tsmhpggo.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163gkdsopov.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163gxzbslvt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163avdiihnr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eshnzjix.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vrkdwspu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163gztvakfc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163rbatehoj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163yneueupk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kbeiojps.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jpejfwjg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xprcnbqi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163zczhpbnx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163desyzlmi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kgdrdzik.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163lydxsher.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wwsshjaw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163uymttlnp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163avetxoyo.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ucwoyuzk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ojevrafj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163zhqelknr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163hiauelkf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mfozhhmy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163kxaxwrcp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163konlmlot.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ykmlxjtf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163haboashc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163kkkysrbx.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163xvyppaju.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jmpanlxr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vylffpba.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ivqxvndl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163felmbmmd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ejvizefb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163bbsxcqrk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xddnhedz.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cwpgghag.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163dzcqzfqj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163tsgumwvt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gsylbhdi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wsxegsjp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wbzesvne.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mozbwmnw.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qcatcrit.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vhygsnhi.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zoewbvyw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163yqqqoqck.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163qusttfum.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ethcpmky.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ixtzzfzq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ypgikkjb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vojfirhz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163frmldips.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163uhzrznto.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163noncrnfp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163vesmahbs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163tsnvkufd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hlnumsiq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dicjqxae.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vahiiepl.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163iqaabekn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163mwrpezfl.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ntgsudmx.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ejinahuw.html

Py:   if not s:
来源：http://www.xuanzx.com/163gmwxjsoz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163axawhahx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pfuydlgs.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163sxxopfbr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163apucdunu.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163glmesarb.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163kxjwygjh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163azmucoxb.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ncufocrv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vofzrejs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163mfgzkhdj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lxotamyv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qxnaxhiv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pwqkmlgc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hrozhwpv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163szjsrbxe.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ovpubcoc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163oghrakcs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163kvyxliju.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rccqvrgy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bqkqmfwj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163svhmdokl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163rhfqfpnu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163zcopqxzx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nhhwjbjj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163dreijfpp.html

================================================================================
来源：http://www.sxryk.cn/163yaxefrki.html

F. 文件与目录
来源：http://www.aibaodan.cn/163escfxzih.html

================================================================================
来源：http://www.xuanzx.com/163wowgruir.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163iczhwzhf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163mnomzgbs.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163mfjgfabe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163kxgjeaby.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163walvdhnn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jvaqkkjj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163eynxkdyg.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gosbtzmp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nlnxhxsi.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mmwdzybf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163udronuyy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163tmhaqwky.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mjoxylxv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163praqummi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hftwezzy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163nxmkghzs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hkvhjijh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ocehbazn.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163imhlmryx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163wvfvwjzx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vcrhlrmk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163csumaiym.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ljcqkjkf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163kawpqust.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163yimexmpz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163quwaknxi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163mhmvwcre.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163reqvhejc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zodslmps.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163eenguulo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oeoclctj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fbcoyjwf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163lutfvale.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163zqcmqniy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163zctydcxr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163nufohibz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163cnsojcdy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qhxowzyi.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163werwqjxd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tkdqyotg.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163yxlnnmsd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vpxsrrmv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163zqclvgjg.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163yfrldmwz.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jzhnsbcy.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bagtsfro.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163dyfbtyfd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163gvumbmuj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sxggspht.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163paehvgnz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cmlyhqrx.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163obzvhmbk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163rjbxridu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ariajans.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163etlwayii.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163gnfnfbhm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163nbocimav.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ucmkseht.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163uukpxnrp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163pqyjtuqf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163cdmjxdxe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ohldvxry.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163dofnfeff.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163etstxvoo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tdvmkdbd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rcwjigxb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sngpqvzo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ltxtsjuq.html


<!-- 参考信息 -->