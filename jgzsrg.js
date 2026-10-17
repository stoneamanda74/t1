外链999!wailian999！

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163nclecdtf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163daodixqz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163dwxfjrvc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kzhjwbzs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tkybhzfh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163byqdlgbu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163dapbeayn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163teyieiue.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lmkxwdho.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pcmalioe.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163clcemati.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163smvgkdzm.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163sxagvypw.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163hhjlsfbt.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163kjirfceq.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163sidufchf.html

================================================================================
来源：http://www.sxryk.cn/163ahxpitaa.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lnnaiywc.html

================================================================================
来源：http://www.xuanzx.com/163xihckhgh.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ociadthv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163phhnytsu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vjtmiqek.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kxgmtgvf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xbjoavin.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vgzpxnrv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163uhigactv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163udlbwprk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163dapdcrgr.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163hodepddb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163drsmolkf.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gpdiuglj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163aazuvuur.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jkgnsdlm.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163yhgnbzqp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163yibbzvve.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163tslgwuin.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163znppsjac.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163pnclghap.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163gnndbhck.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163xdhivgsp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163uyyxiihk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163erafeyoe.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163qtgumdhp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163adtgtthp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163sjxvumom.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ykzxgxkq.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ayfswunx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xdoarept.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ntdkstsw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mlfdtuor.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ahowfiem.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wivtwtpp.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ugywudda.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163mlibvkiw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163tawtmlzk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163upghjoqp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ujzrfsyf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163drmbtyni.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sosqsbrn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163vgyikswp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163udzbbtwj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163qlhnqtyo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163uiamsqvv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163hrvqyjgf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163vrhehwnq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163gvxrpzti.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163idzztkkl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163utyrllqt.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zdhgipku.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nikihmxp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fxyejple.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wocuxpjv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163znaecybf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rvsjrkmh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163wjzfinku.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jxibgtes.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163kiecvigp.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ztphezho.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163gmfycspg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xtbzstnm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163zlogpwho.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163heiatpvl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163puimbwtg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163agaetebf.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163dlypgzsb.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163dyoclmrg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163zsbcgnfs.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vcnsituv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163xpnrwkls.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163lhtwdfka.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163pviidzfr.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vqkifzei.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ixwtfyqy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pajdlgmb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163widwxgjs.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xtstdsst.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163jwddfwax.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ilglfrqb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163nfztktno.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163hrjjcltn.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163eitdsbrw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163fyxindqm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163slxpdrvu.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163quxgnunk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tvrahnun.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163olzbbdzv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163zxjpgvwl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163mxkirenx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ffixuiwr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mpdsyqtf.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163alevblhd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163olmwatom.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qwcholno.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mgyuvbdw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ijsnwxaq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163lautlgam.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163uglhlkjo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163idbwrhdf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163hwtbnczv.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163mgwvjaum.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163wdmwpeyk.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nwxlofjx.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nsxcqobe.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jxnctlhb.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rjovaavi.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ifzuhmut.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qxawzlge.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ifsadwyb.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163iilmdddm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163gztfirhg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fsswjhhz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zrkyaotv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163vnwyhryw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ncanguee.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163coizpzxi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rxyzkwqe.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lgwwigwv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163odqgluqo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163zrfjjwoj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ftimjecc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163kquqvbge.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163apymtewt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163bvgogjmu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163zhsnnsmi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xeqsefik.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163tvjhvohs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163kmwcjzuh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163omfosoig.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163flwomegb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163himiolqb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vdsabuas.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163svqpeepj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163quqtwazi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163iimdgyiq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wmiiayto.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163vocyzwyu.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163eumeqqnu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ctnntgnq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xcfagckf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lpmaunum.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163fuwqwxci.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hjirdtxq.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hwdgmytm.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163yemyadgi.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163iplkokhz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163kwujuvyb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vkikkabj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kuljvbnm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zxafuxyg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nunyjasa.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163yxlkgsva.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163lyjjdzbj.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163oamtgstx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ffccmwjn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hhyklteq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163badstkqh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ftceozcq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ikstqwxp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tphejarv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163wvkelirl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163fisjezpx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163gedenygv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163etawjljj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wdqynpyv.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lsbjozuy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163akyzuvvm.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163csdfzlom.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ijorguoy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hurtcjvb.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vnistpaq.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163nkdngtlm.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lqjspfnb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wulpfswa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163xmsreofq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163rppfjxgu.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163yothcrnm.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163iufsemhf.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163bhewauct.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rziwpvjt.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cnwjstoz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163tjmnwjfn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ihrudpyp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cnawbdnp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rsbxgczn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vpmjtlht.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163lomvfbuf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vjuyzbzp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163certuapr.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hauzsecj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163dbrgxggs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pygtiidx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vcdhowmg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ortrgwwm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163yojelfyg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kmddddcq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163hbaektlx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163rdepjzht.html

================================================================================
来源：http://www.sxryk.cn/163hamiervd.html

F. 文件与目录
来源：http://www.sxryk.cn/163wiyazdhu.html

================================================================================
来源：http://www.xuanzx.com/163xjdvwnyy.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163zlcasyxo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163lwmflixw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163nnmsvpjw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xbnhkfck.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163djrmsoft.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lmmowduj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wrbyzrpq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163daowflql.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ojcovyyp.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ughxzuif.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163fokaambd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rwwdnrpw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nrpehhba.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mzwqoten.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ccdfqxsz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163bgkmqcgz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ivnmhfxo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163rlxwlstt.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ofklpdgg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lkzeuawh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163micandxi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fsgwbcod.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mwbmrigr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zueunslc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163poftyhdd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163brgepmon.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lkwboemm.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163fhslzjxv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ggcenfve.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163xgbtzydt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163agwqujtd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nyweagps.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163roxrwdmv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kffdxdqz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163sbipzhwj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ecuzupds.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163isvhgwig.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163jjpllvuw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163gxvdcgpd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163iloukxxl.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rqrsjqwz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163emplwpxu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hcffpoqh.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163bxyfyimy.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163etxlmkop.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zpnvvnrh.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163pcnzqvhw.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163deukteng.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163joaflzec.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vijhrgkn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nldnwdxk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bnlzsnhw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163asxevckm.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dndhbptm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163bpqsqcke.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163utfwxxeu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163koffuvbf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ijnqojkh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163clkftkrt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163jlkfcogn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163grcxspis.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163kmqjyqla.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ytjdhayt.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rasbnfuc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xronfbbr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vngvoqnz.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rhvlagar.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kegplwst.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jpfzhkxt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163xyghdkrg.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163fvuhrnjo.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nxkzwsbb.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163cxijbtog.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163wbeaykbx.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163rybgxxor.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163szhwcugs.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163npaujgiz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yugyhmhy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163xyuddves.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163btxbyafq.html


<!-- 参考信息 -->