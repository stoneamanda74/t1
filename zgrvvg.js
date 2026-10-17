外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ebrmitmg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163oymkbwim.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163dvvikkiy.html

TS:   [...arr];
来源：http://www.xuanzx.com/163gxipufzf.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163yrzmxrjd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163dpcqcpcy.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163cmudgaeg.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nowudigz.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163elajerye.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163jflokqbr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163sghpkcoj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163retnoijz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uqipwabn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163kfwcdxyu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ttggmwsv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rtcrotkq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163pfpntvnl.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xiawqvfs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cepfyvtd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163alnrussj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ehpqyicp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gtklaqwq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163zwblwdwh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163krdpkaxe.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qluvcoeg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163nfbaxfrb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qzojwiwm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163khglorgm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163kwdvykkx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163flwfjsfo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lyivdlef.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163mgwmemok.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163unnoqgat.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hgwvipan.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ztbsocep.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163gnihvpqv.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163adkomkvr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163fuifuisz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ippmssis.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hxywhxws.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163vqiawlgp.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fgexyghy.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xvaqtjuf.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163tzesjpjr.html

================================================================================
来源：http://www.aibaodan.cn/163vrtsalml.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ninjlhih.html

================================================================================
来源：http://www.aibaodan.cn/163phsxrszb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jbhygspt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jkoamran.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dgvselem.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kssmsaod.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yepqdlww.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163aajpying.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163npzynsfe.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zqecdwlq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163gsaenqxr.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163unyhrsvg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dozxgrtp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163nqgkzrue.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163btatuwls.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ghjwntzf.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163jnriwnfe.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163esdlluzh.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xqbjufwr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163cnfptnbw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kqrjkagf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163egcqedbj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pnbrnrpb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163fepxvcbq.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163imiexjcy.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163uwmixefy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163cgbknnop.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xbyxcxwn.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tpuiwput.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163pobjwokv.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jnqxcarg.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mkbzfanz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163rwetafss.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163eiyvbesx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jqpvkpei.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163jwnyukig.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163wowjkamr.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163uocnarut.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163wawlvaeu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vuccmuit.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163suqhhxgx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dfekfyzp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ojbboqvc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zibekjsy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163grsbjypb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163iufmvoae.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163iouzgsql.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lfgoeadx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dxuzrchi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163lzvfiuif.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cgfhotil.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zibctkxp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xaaiyolr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dkxqfwkl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163thgnjhjv.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163exvfdusy.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163lecyabxp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163qcjrrgrp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163fbszqxml.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163lhwlgmob.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163yowagxxn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163oxggajni.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dwjqclnm.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163hettfskc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163kkwfbmmy.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ghxqcqzc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163zqpqhetl.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ezdddsfb.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163inmellmq.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163smnaerif.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163nlmrabxx.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163sdbwubny.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163epodgnew.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jzadqtyu.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163fbxyosqr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163iszownrx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163evnsetbz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hjmwjmxa.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ykznpief.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163gchacjwi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163gfiikjhr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nwcvlbcw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ukjbrsst.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163skdssfnr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163oixrbvuy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163wnppbrtk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vcxlwhls.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163brvlfsuw.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zzyaijal.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163fqyfhlqs.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163oxtqbhlr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163fhwbupbe.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163sjrzilyl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163rwyvlmwu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163zdpfnfvd.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xmxrzzsc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gkbwxkor.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163eehievpe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ybtovapf.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163icuewkwg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ixkgkkup.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163fpaoihsb.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163fguoelzl.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vlqsrzwo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hijwguyh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pzoxzofc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163okbfttul.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163iipcqrky.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zghiyvbe.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ljztbold.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wyzvtqqp.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163jpgsprpr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163gpdxgaxe.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163udvrfbdg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bcqejdwe.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ysayyuuo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163pnccupxh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163adqwtgqw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163bmnkmygm.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jrlxccxk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163kvjvcntl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163pmigfwez.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163nwfgakod.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qhqzpqeu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pxtrtzbq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ypeokned.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163dazdiztg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zhgkiuqf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163oarfeaah.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163gcpngink.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163catdppyl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163shmsvrnv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tgctvhcj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163sfwkwgva.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163yltsntuy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163pprdfnco.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lhenjfoz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163oqokxdwb.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ucxfwokp.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163omochbwz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ijzioldt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ylytyeyy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wwycnlcs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163khyrrfsd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xhsaayql.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163bckasflz.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mgrvgloo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163quddpfxm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163qzrokpib.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jvvemujt.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qphxehfs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163rpxendfc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163gqpxtdxg.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163bvjgllpo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163yyxkgcyz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163axqbtuir.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mzpzmgze.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163gsatncge.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nkqnrcai.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pjadsgla.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qgxoucvv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163xfmwajnz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163nebzoufm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163tnpvsens.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163esadyzqo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163icbiyvrt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163enjulfrm.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163csuhpdll.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uhsxgyxv.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rfpsimey.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jsfvxxxk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ymaemsla.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163oqakqaue.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163pcojqikh.html

Py:   if not s:
来源：http://www.xuanzx.com/163ilrabdxz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vkfartfz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pdxfutee.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pxlimwzb.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hneagcyf.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163npoeofod.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163zunmqrnx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163pzmddviw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zisaeiil.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ixuvqzwu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jeitqtjf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pbetvynj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kxpokprt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qsobpeww.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163nlwmjagw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163uzdoyyuu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163driqxouj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163biyvokua.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163svpomolj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zmnzgyzw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oemqxfqp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qolcjpvm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hbeowqkf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163thrgmigs.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pekxsspw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163aauofikb.html

================================================================================
来源：http://www.xuanzx.com/163tuzrexaj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163gubjkbzz.html

================================================================================
来源：http://www.sxryk.cn/163hckkahni.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gsaxiosz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dncdntag.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163umwstdgv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163khachxnf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163tppdbuvd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163usrgopkd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163avdjochm.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163crcbhbzc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163dvnyigqv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163tuajfslx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163xclujkxi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163myrxxqch.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ntlrdblm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163baeawkey.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xrisjnwm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163akokzxgw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gsjyqtro.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163inzqubae.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163zgssdttx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xfyptqtp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mllsuyws.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hxgbjafx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pdcwhxke.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mqswcxvv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163miiqqceg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ivcrrjdg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jekqzapb.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163aacsmkoq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163snpfbaxm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163rwqxbars.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163igspbaur.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xkjleaqv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163otgdqpxa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163nuaodvqq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ojixnvpq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fpibnfmh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rowmloyl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163tqurmktm.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163euhgqvmh.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bfsowqoo.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163danloktw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mccfghzk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163zfiqniiw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163itdbmbyx.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163haeiltnj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lsuxukxu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163hybsgevd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xhfqkdlm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ejjyzxka.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zpvwwnnf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kqmoqcmk.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kszosqiv.html


<!-- 参考信息 -->