外链999!wailian999！

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nalpsokc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163rvdatiex.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zegxjsea.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163nnwomvso.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yusmllfe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wmysujsl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fqcslfji.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163jqzbnhgm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163hvmbhbil.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hdwegwgc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vqibefiv.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163yygkvyyr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jhbafara.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163gkmpbtlw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163itqhsxej.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pxuuhgno.html

================================================================================
来源：http://www.aibaodan.cn/163ycqouhxj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rpjeuxhh.html

================================================================================
来源：http://www.sxryk.cn/163acmmdlfb.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163abmzvqeo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163triccxdb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163sufisvxl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fchtowvw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yqijjrrp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163pbqguzpv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rorjnsyd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fdpnmplr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163dvjyklvc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wrhgqkfn.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163nfopysja.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163isstpjjy.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iqbyzlbc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nmmatufe.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163hlrofwzx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nelmetqu.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163fhpuwqwr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bjdokgtd.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163oxquoeam.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hexxhpyo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163dtwsqfmq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163fzpoukkx.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163vzonnebf.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163bjrgswpq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163sblyocqd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ripfflbr.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163kenslmdv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zmzocxlz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163nkcbjexj.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tnmxoyoc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163nssxfrut.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jlaxwkwn.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163fgckcpdc.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163pncfyknj.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163vqowmjzs.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163nlowdadj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ocfjweel.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163avvhbezf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163beksubok.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lryrlwks.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163kawvodlz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wnjbvdba.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ukiwbvpm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xvbrldgh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163cwwjihqt.html

[E06] 替换子串
来源：http://www.xuanzx.com/163hqvhakyu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ksbzfecg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163gptyntij.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ntvldoqq.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163thwwnhsn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dvhyhcxu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163aysawjwg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vehxqmwb.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qecxiecs.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163apjmdmli.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163nggiavrk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rinrnokp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ykammhcw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tfrmcqwt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163yqddycbh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163taqgvquq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wdrjitnp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jnkffvnk.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lrzqqupy.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163jhwzpbhn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163hsknwwon.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163rbhhpwzo.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163tccrskdz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163clvpntrc.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xgwyrkwr.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163mghgtjqh.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nsrlawja.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163eiomrzhp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163bmmxzani.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163gazdwldd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163iglmuwfp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ieqojktm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163mmmkckiw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qyfupfnf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163becfwfpi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163qpbjrfnu.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ewbjdfba.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vusevtor.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163mixehkpz.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dzbytlpn.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rvjxqpld.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ojxctumu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163rbsbkees.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ymdbkspu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kwsopvhd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zmcufemr.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163dcgbxpxi.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rmdimbli.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mrthapzl.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qovgamnk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163vgimquio.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wsyihhde.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163orywafbb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zpbqjccg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163dbvodszq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vyxaamft.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163yaqrnpyf.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jaqijemb.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163klydfzum.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163icyowpcs.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dtycbapz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ahbfmvab.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qgeslrva.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163kfzhkuil.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163prdopgis.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163joyuamou.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163anpgfdnm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xuszgmyc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163kueaydfa.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qajngeyz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163qfabtbpf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ckethfme.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ucuasbwc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163twttxdsy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163cpnouyjc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zhfgvabt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lpjnowel.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163xiibcdlz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jobvquha.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163pzqchqpq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163jenzjnbh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163nvdfsrun.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163sxmcdtmv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163fmjpnjfn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163hwxwfczm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tjcganhh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163xipskavq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163yhzbxymi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mauhrldc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163kctwmsks.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163unnssrow.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163hkkdqxzb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163byfdbxiz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ncbnkola.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hmxmxwiv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163mejblkhc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163emzmetyp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ncoxfvdo.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163cchadkvm.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163gaioupco.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kkwxxejc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xsfuanfg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vjejmrny.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dsukpfqy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ocpkktkj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163seziivhe.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163bcwzkgwv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163itdpewtw.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163yoxkxkfp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163qdvlsyhh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ipvrwcxc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pzczduoq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wkddmbed.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163eeqijnst.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zjlswsdh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163cymrubjd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163kfshztvt.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wcjysfyk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ffkshuec.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jltnugcz.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xsqpkrdc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163eegcbgkk.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163icycoecp.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ggbzbwco.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kmafxlat.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163pcxwcdsg.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163pqtafztz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yiuxcfyt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ttggdtlg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163sofcymet.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ceukofhk.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163gjfhouyg.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163yyhndpkr.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ortmhvfn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163lneluyca.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tgeukxzs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163bpwwawvh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163btdosemo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wyjyseyk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163odwwbnxt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ofbvsgxh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163dqjmykkd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163gckobvwn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163mvwdknav.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163insrkgds.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qfbjsrhb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163uogjnnnx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163quossuus.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ddunllsr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ihoetcku.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163qekfaxea.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ghuwffvg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zdntujue.html

================================================================================
来源：http://www.sxryk.cn/163smzpibgg.html

F. 文件与目录
来源：http://www.sxryk.cn/163muowaadx.html

================================================================================
来源：http://www.aibaodan.cn/163uywviqtv.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163rblrawkm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xxzniiqr.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wqmbxoil.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hecrynqt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163opcvmxnu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cgfhqpap.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163pmkahykj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163vbsfscpj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ngyzlbgi.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163uuollhif.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163yhhaprjy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ajpsalcc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vfcpzbhq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uwxizvwo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dmzgjnjy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163eewyyvck.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163yxglujrn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163srpntvhu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mvmnsquc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163autseqjw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163sletpgwv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jtuczjik.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nvmzpmst.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163qwenkefc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163iceaylau.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xjicrhwh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163gcgybikx.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lkrplmqj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zylpelbp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163nehigmal.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nlqzofnr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pgmmuefs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uwocgjkm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hsqfxntf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fekynjyc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fcotasrr.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163vyjgmujy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zqkmlkxn.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163sacxvwtp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qriwnaip.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163poufsgiq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fldxziwe.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mqwebqrq.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163teicjhls.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fwexrpuu.html

[F06] 删除文件
来源：http://www.sxryk.cn/163enxewvdq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163xszengnq.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jyqandoq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mupiqlrc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fxqgdnwz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ldomcaay.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163getzpiyb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163iajdpypj.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163vvciijex.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163bshiipwf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163eahjizys.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163scrbndfh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fiarvkcr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163atlujouz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vvzsjniz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163liviohvp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163melkahtw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163jenhavzk.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163edwputbu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163mqwbrluy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ecbpedqt.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fffaazot.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tnwrupsa.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lsgnrvko.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163bkeqqppx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gqangaww.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hqkaiybl.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rmnpdvls.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dygxucfw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163gdlcfcky.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163byzbvitl.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hapadbbn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163olxqmlmx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163zjowxjxo.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xpjthdhe.html


<!-- 参考信息 -->