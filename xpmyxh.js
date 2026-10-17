外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nupxttab.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163oyclesej.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163xevefpby.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163kmejkhop.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ycbodpfd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163pqjfyjqi.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163wjnojdvr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163navtwcpy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163affyovov.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163miuqvqcj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bbfrkyqs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163gmbspjzb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163lmmszgdx.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163oowxabmv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zftwgbfd.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163bgbdomvx.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163emzdutbw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ostziecr.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163cxlqstap.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163wwfrrzqq.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ypwbyboy.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163irztohgp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vmwsllwz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163mvbacdlz.html

================================================================================
来源：http://www.sxryk.cn/163xzexisle.html

E. 字符串处理
来源：http://www.xuanzx.com/163cuvddsao.html

================================================================================
来源：http://www.sxryk.cn/163rmjimfwj.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ptoawapa.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163qeeknusj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163tkjprrvq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163keumljia.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zvrytzvx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cipstdpk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163npistubs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163eerywgqx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163jvzmqfay.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163umulrram.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qalftaqy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gqiozffv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163woucbdux.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tunfosae.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kbtaljxr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163pzrqqjbz.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jbahxwmu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163wpfvxgkh.html

[E03] 截取子串
来源：http://www.sxryk.cn/163aaktbimw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163fcedclyw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163fjpverqg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163dajszinx.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qjyliefr.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rbwyutxx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163dbftxzhd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tsrqeujr.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pbgvylbd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163kobvkbga.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jmhrhdvv.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163hqpbhszu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gljhevow.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ppvgnsom.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163bcihkcrs.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163itxcnzbd.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163pwhqucow.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163zfvchuew.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zobjzjjs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bechphba.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163dxybpkcq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mjsuwpxi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jfqyxjvn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ptehfdvk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163iffmhwld.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163dkcadhpm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163faqeyqhf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qkzvxivo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fjzettim.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163rryousbm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pojtphbm.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qjeaylnx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pazdjdct.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xakbxwto.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163kbccowmu.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163cjwgyypx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163fqehtlau.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163arxihupy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vfhyrnyo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163igxbwbcl.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163uajepjuz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jrtoeprd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163dujfajql.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163jxhirsic.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pzqmvnru.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163zaspllxq.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163odxiiopf.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gfppokoj.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hcjiqntj.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163inuilvyh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rhipkkqq.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fevdsnga.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163gjzgkyen.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wdxzckni.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lbpilvab.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vfvaawff.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163twrmjhwx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163cypgzctx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ypxfiiyz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163oulhoabr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163adtozvpx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163tatalqit.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163cyzvsfpt.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163waxkwfxl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rhozgmxb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163awbrwmbc.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bmjsojum.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163aehjkplu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163gvhlhjoh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xkapkcsm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163fnrhohiw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163zqdiogxp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163cvdgmeyh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163uhaizsxh.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163augbsaia.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vztvpmcm.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hnewovyz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163bybzyrtu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163hskxouvo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163vswgzzri.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gflwakwh.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163faxxmxdj.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163zekphsho.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163pzssecxb.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dsjjpnrv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fjoiziih.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lfwwqsng.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163uvtghuar.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zjuegmmw.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zqndjwlf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163tpvjrpaj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163obtdlltq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163adbaoxby.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bidyojhf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nzyjnrsl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163whrhfyos.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163kvlpqlpj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163xwowqrlm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163lquxmocp.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qhwmpebl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163wcosqwws.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163izrymilw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163gkjtlllx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vnjkljst.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163tovosqve.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163scktktif.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163wdlrnwvm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163wmjtksbm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163wnekymzr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ifkghzty.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ouaothif.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ejsvlbyr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163nqzmasau.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ujexfhxz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163yzdgdwvg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ugvxdxpg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163pwumpmwo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ebwnfoca.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163hkyatxsj.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163jnarmntt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163krvlsecq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163omdbhqqj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bllykbnx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kauljrnj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163koekemzg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ohkuncas.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163tafgkrnl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163trazmjvx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163bhgyvcqt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iymdrjdh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wodhnbta.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163sazlsics.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163dwmxhzeb.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hzbhbman.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tuzmnxya.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jycojnyt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163uvpnvyze.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ypdjectg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163grkcedts.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tvuuhbmb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ddndqsma.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163gcfcilpp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163exknprmv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bapwgqjl.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163izatzghs.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163crbuwahq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xgdhgwfj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xzvbjsms.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163enfzawzt.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163bbrpchpi.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163rzbbyvcy.html

Ruby: s.lines
来源：http://www.xuanzx.com/163puoqgwmc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vjronqfg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tgdatzxq.html

Py:   if not s:
来源：http://www.xuanzx.com/163jhseobfj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163evjkzuut.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ecnyebtf.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163njuyibov.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dhhqmtoq.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163mejtcwrm.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163cvrqbbrw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ykoelfps.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163wlvcxbqr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163gtyubdgh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163lxvdweov.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163shxpumdj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mdosursu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kjotoqsi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rrnsyyzw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jpskjwpf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xgavuhrh.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lpkcqlwr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163yvatrphl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tseyaeee.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pmuclurs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xgdlddng.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ffssikzo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fzogzaew.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ekppefsy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163entmxvwu.html

================================================================================
来源：http://www.xuanzx.com/163zkevdaru.html

F. 文件与目录
来源：http://www.xuanzx.com/163zwkveyob.html

================================================================================
来源：http://www.aibaodan.cn/163nofvmqej.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163kjlgfkld.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163advutvkf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163znuxsptl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163fmfwwuvi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bdjkugfz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hdlxbarw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wyrkgfes.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163pxsgyyuk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ppgyfxgb.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163bbfcygoa.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kgdsdkfb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ojfhiukr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vevgjppu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qcmdrhiz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bsllgcnd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163sjejyxow.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vbqnusck.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hxlupuuw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163mjhbnzya.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163fzuprcfc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xdunkwmz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xvrexctb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nkhxodeo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163pgwrhdek.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163crvzaxrm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163auljywkg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tvechyie.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163cjbokxhn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ejvfabhi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163pflrukpj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163riyumlaq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163udqddcus.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163blzheiux.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ufokllrf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ditpbtor.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163evwerbgq.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163nrwuwngf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163gkdfamjz.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yxajsvzg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163erlxvvix.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wnjtznuf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sycuhhgt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xqxulist.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163idwjkgkt.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ryouybgl.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wvjdkjko.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ibdncovy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163icdxtjhr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lmqbsphr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ceyqglip.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kgdvdgha.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163sbtfhrvq.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zbppkgqk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163zoptgfye.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163asghbpmp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dmvingfq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163dfrdpyai.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wrtgokfo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fotvnubc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163nblnfkaf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163sjovpmnd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qmzhsidq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dadhaurb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163dfsuoiza.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163hxxmpvgb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163rbqkhogl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xqwujexr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qfaraioi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sompkltu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rtkbcawi.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163stcvuhpd.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xxlqohcl.html


<!-- 参考信息 -->