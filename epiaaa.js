外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163eplukvvs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ivqkepvn.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163joyrdazj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163foxlwoym.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qhmzfzfg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vtwjabxo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163iwjzlijy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vohddqmr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163mzefdfqt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wkqdihac.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rkvxvcou.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kahtiwjq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tlfhuwuc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163llotznpk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163qcdqesmv.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163txjoofjt.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xtckaqhi.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163homxxpxw.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163bxzaynhk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163vyvjsxst.html

================================================================================
来源：http://www.xuanzx.com/163keoiargg.html

E. 字符串处理
来源：http://www.xuanzx.com/163fkbvwmen.html

================================================================================
来源：http://www.sxryk.cn/163bclckvlx.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mqvvqmdl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163lrgcbaxe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fkkvlcdb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dhcellrw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hngznbct.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dtzdqcoy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ogcveazx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kbtnlssm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163fvoafdnz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163czwjstpl.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163akuhwtwe.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163szlabbsy.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rqrgytxh.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lkwkmreu.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ztqccfcl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163lorkaanp.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rwdpwghf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bvhglyft.html

[E03] 截取子串
来源：http://www.xuanzx.com/163irpxrjhr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ttucykua.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gxaahmsb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163fospktkz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163nunhwnsp.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163setktlxq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163bhuhbqlu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163oshofbct.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tvcgsyey.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163iejnophs.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163mvcycnjz.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163uriszsph.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ldjcjbve.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163krhziojn.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163olvatbli.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163vxifqouy.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163prdhwaoy.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ugjraoqe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qlzarirp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163glnlmifc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163lbusrnqf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ujbkexce.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dvyppesv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fyogskjg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163feefgqrq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163frkkzoxv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163xqzppili.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mfbjuvau.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163eywevinu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163tqaokkop.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dthgafnc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pgeipnnz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zwmlnfyq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163rdrfikzj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163byushkxo.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163nrgpftss.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163fehazygx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163hpjmtboo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163nqqkzxto.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ppktbkjf.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163sqkrwyec.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163oaqehhrx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163oheifuua.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wexnexvg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163iviithvd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xrrcmgos.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163oehixmys.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163prarlymb.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ezlivqtb.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kahnddzw.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ppwjatmi.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163sdoanxwq.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zdyiezas.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jazezfja.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163trtlsyev.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163dhcmxkbo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163oyxyltck.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ynotxtxp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fuhmbgup.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163hklcqoug.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zysgnfpb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163tneigyoc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163qmwjhavq.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163hmthpcpv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163chladdqc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ozuagcfw.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jplyiymf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cpmdmttk.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163glxjdamm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163kkokhboc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lvyzbznz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bdwrqaci.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ulweuicq.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163axpldcdj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163omkpvaol.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qxpthgej.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ronnbday.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gadkkcfh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163kmjevlbz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163waudhzdj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vugzqgqz.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jktefilo.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hrjnoavk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163fwlezkyc.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mmexsyac.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cqkebqcg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vyvkwjcq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bakwslal.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ymozvidn.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163twggnrzz.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wqwfxnal.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rnuelame.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163mevrmrfe.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163drtzylxl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163thvbutgd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163miimkfmi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163psvwvvxz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163enqtmvcv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163kjhjernp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163lwoxwovw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163oxvjxuln.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wuorpipl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163vhlsslrr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163xpnohbrc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163luassvat.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163izxzuhse.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hyvwimgn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xjodkpxm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tfdkrwpu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ehdfffmi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163fjerkqmj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163wdbgzjna.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163dosljcmw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163alxlgucp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gwreiuat.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mspscfvv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163xlxcqakj.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dlhpapjb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163folkwfbk.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163mznwjhgn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xpfzrsxt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tyalfouv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bwhmcohu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163zqwuhfju.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jlynczmj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163klcpqtlp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tdnywnda.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163snziyedl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163busdqnij.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cxnmkiur.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ynooyccr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163hkvftsfa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163eapsbzar.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qtahmcsm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zimgulva.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bwxtssth.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163dacelkhp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jrfnothq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ievgekiu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hjhfnezg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jggyehdt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163meffruff.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mcjvutbu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163uoblrwwn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163bolwzktm.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163wyhxhcmi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bdikueek.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qrsfotsq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wnyypcoi.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163tcbjrpiu.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fzfgvslv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163knirpwcd.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wnlfcmqk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163kwwciout.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ycyxdzsp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ucpvdbwd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qllmptbs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163iwofhxul.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163vgiikhzc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163wjkmimcq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tjrccgsw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163lulwchuq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163kqhnqemq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163arlymlph.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163raofcivm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163waovbgtl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163icruhtod.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hxbhaliu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vxyayhue.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fkgzderh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163qjaunacd.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vfybkugt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163llidgxyd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yzhyqfhp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hdbntctt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gqugqvdp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tbelsenf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163fmvubjpg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wmmulixs.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hykicrjc.html

================================================================================
来源：http://www.aibaodan.cn/163unnmugmj.html

F. 文件与目录
来源：http://www.xuanzx.com/163mfodgihm.html

================================================================================
来源：http://www.sxryk.cn/163rsoyvcxz.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xqlajnre.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163aemxrgaj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163treymeyj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163oacsurtb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163vsclbhnd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163adjksqoi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rdzajsch.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ftanfoih.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nkqmsnik.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yzbeuqpg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163rqqnknjp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cnqeclql.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gbcyekan.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zlwmcnwv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qrpjfoid.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163uypnekrx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hduylrdp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163algpgyad.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ojgcuuma.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ncjuxwdu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lzdrmsiv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wumojusa.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nnuxgptt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163qlapwfqj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ajeveytf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163skfzdlxg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lvwzlsmr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xeiufnfc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163osllnjfa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rvrvqmtb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ktyhtkty.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163thdusxba.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163kuiuiopa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zodffoxf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163dobrlfhv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163iibbialc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163pfeqkihe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163luenzfho.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xyfvskdi.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yqbmojvw.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vxrpawbc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163klcbovud.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163arxcdimy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163gsvpzrho.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163tjhuqtmh.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163tcfrnvnc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163szmsjkho.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163yzrehkpn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ekbgfiet.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fqkeqqlq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vtdbvlth.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163uldwsxrv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163mrratmkx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163etdyojqc.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qfruhbqg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vydfixpu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163wtthcmkr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163aibkzhok.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rfdqudgd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163cbxyjnzs.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vjrelxxn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163jcmjbdzk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163fbhxsnce.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163nlyxctye.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mgkuouis.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163gibnqmpd.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163njbwhhfr.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pwnfgmrr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qepjtcyd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163jnqwwyei.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163kndeaeai.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ymqtlzns.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163dgdqdrxr.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ejtmoqtm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163knghbtce.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xlclupbl.html


<!-- 参考信息 -->