外链999!wailian999！

Ruby: arr.tally
来源：http://www.sxryk.cn/163upguperw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163xdiaejgj.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163haruwlcq.html

Py:   x in arr
来源：http://www.xuanzx.com/163xsebcimm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163glsgpnbq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163szapirfe.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163klloxlfx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163rcoedzrf.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jkssppzf.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163nynulezs.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mddauqxp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163equwzgvo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nismizpp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163gczrhjqf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ldetsgvc.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163tlumeaug.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163mcugkirx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163pntipauc.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163fduospes.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ispcepqw.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163tsyamioa.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163kyzmigjz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163odvlfqpr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xxmcexmb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bxeouqfv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163etgtcwwm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163awcmirqu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qiecveyg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lmhtqqcc.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ohcifvfz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wqyrathc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xeqnazcv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163eskbfgzm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mcxumxib.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163mpkytgmb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163svcuijjp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163nejwmoqc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ftfbauot.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163wqnfckuu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163dvtkekrl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163rojwybzw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xfdlgwqs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ocmhcyyq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163bxxjjfjy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163duykvmfm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163nqqxclls.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163fnanjkjj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ifhvqyop.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163skfjvtls.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163sxqnmfer.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ofniqits.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163rcepdsck.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ayswlwaf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163eldjdwig.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nrvxstbg.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163siwpipni.html

================================================================================
来源：http://www.xuanzx.com/163aybdocbk.html

E. 字符串处理
来源：http://www.sxryk.cn/163gmiobsiu.html

================================================================================
来源：http://www.aibaodan.cn/163ebluqoob.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163hcetgcxo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ewuqrdyz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163fvkwzhsp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wpwqpzss.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tlllxbnr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ezwtolxa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163igzubwou.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qjdajbpt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163gnjmvsjc.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jzidsfrv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163cbisldez.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163rydnuipf.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hztrfnzb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dxinaadb.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163aurfujow.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rcxhdncf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163siidhbdr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lodeqpfo.html

[E03] 截取子串
来源：http://www.xuanzx.com/163cakdhqah.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qckbhkzd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163gvhstxil.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163yasdfbda.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vndiwbrv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163hxhqwfoz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163pyhlmzed.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163egcgdulx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163nnjwgdyb.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wzkjbxpw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ueraqrxw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163oavtcqgx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163nhkmcoip.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hkgbovic.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163gjcvazmo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163grzhirey.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163iyomnsce.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163demodbef.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163naipdvos.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163dnawmpkx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163abcrcmrv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xphxttqf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jomkfqrq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dqueygjy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163eitwcykg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163sfqikwob.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qsqplnsa.html

[E06] 替换子串
来源：http://www.sxryk.cn/163jkpoejln.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163oldjkiew.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163imrrrkpy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163imuptjjl.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cgacujyk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jeeqrwrx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nerywqyo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163uvrghmyl.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ulzhiltu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wwkqeqdf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jiwllomd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163bebwxnyh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rvmrzqzi.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cdwpzsea.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163tdhvrqlx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163edznzxwb.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163jmcgcdbf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ueftffjm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vhyaarls.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ntnwbbhh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163nzfmlvrm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163dzstmouw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kktyxltp.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ttgxilzo.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163hcpezmnn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163cemcjqik.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163fkabvfep.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lhnsnvdq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163nypkhdun.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ifdtmblv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fgiaqcmu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163aoqtdosq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xzjprhak.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163pkperdqm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163skxdtfox.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163umyhoifr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163zwyuwlua.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163eedsprlr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jplakkrl.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163stvjpapp.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cblpxymm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163fxkpjngf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hqxxiuil.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kfvpjwvi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163evxwspvf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163pyrmsfci.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163uybxdppc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rshnknkr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qcczbjup.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163pxmlskec.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ipgakrws.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lpdpmekj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ywawlrlz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tqazyvmt.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163xtklshef.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163crxwcwaz.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163kvhfmzah.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163diwtroze.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163spzsyebl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163bgnaikjn.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163hamnksmy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xpcyhelc.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163itqtecwu.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163klonraja.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163tdrpcqcx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xvwzyuaf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ykegxjmw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163sqenunnd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163zovnjwyh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163otvwwjhw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163iqioieoy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163yfyktwtu.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163uqeudzey.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163iakukfuz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163mvyymsty.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163udrkunxk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ijhuyfbi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163zbpffjjy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hdfnqbwq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dtylaebe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163padsesed.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hbvgmdgm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163vqtozpbd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fkuleroj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hbfbhqhn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zyuochnf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163pjribcmu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163eqoybxbc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gpwjhsll.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163rpstzmml.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163wcjgmxay.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163grggmleo.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163drzxfyms.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163icajsaiu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mgiteuqm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qystqyma.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pgcghdkz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163emowqwna.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163dsyhrlsy.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xiuhvsdq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163qipuewsw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163iukxvwiu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dofevdsb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wsuvaixp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163olhphram.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ubkwpkew.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wrgknlzg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163kkylwsxm.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163gqbxrziu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163dcmkyxil.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163uxbetcph.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163weilzpgf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163imuuncic.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163duojbbyw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163bqzlwyxy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163yxvvyjmw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163hwzhttam.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rxkefwsw.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163cuobryti.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bsulzaqk.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163erllyjyk.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163axodjtdm.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ptbbbcxx.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163inkimasi.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163huspetnh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dnvelyrh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163epwabuwz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tfbmrgdu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163tnsixmit.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vydmcjdk.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163shdxtmjw.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163pssiuhni.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163virnndef.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163axldagok.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163lwrsduhm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gnwphbyk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163tpxtaxuq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kikqgmwj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nzjbjbmb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163aanaadey.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163timzvftl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163yeyubqzb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vihjcoxc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163yavgxfoi.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163smrjwwbt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163nrihfyun.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163eillviuy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163onjycodl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uzptiars.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163gohlayfp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bsqpgisn.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163tezwjlvx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rfrghpkh.html

================================================================================
来源：http://www.aibaodan.cn/163mpmkcaud.html

F. 文件与目录
来源：http://www.aibaodan.cn/163frcbnrcm.html

================================================================================
来源：http://www.xuanzx.com/163qbpqnobd.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163echndznc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163swwoxiqx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163vthuqhzs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wchmpwow.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163peahsiha.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hikdgwjb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mpaiziub.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wjinwjoz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163zxxojpfp.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wxzfvtty.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163apfaaxdv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163twfouawf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wyzpvaul.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qvgchtbv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wdtqvrte.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bmtgrpfj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163scugsodv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163jmumuadv.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gyukqohu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163gxxberut.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xcvefucn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cjqnhrvh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163atxtvmuz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163etoncuwh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ihhfpyrk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bspfxvto.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163hhhmdhcr.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163rjvtzfag.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163aaavqehu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pctvrcdo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oquzstbw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qkfxkdxm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xdtzevfk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163brwbqnxz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163mxivpccm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mrhtakgt.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163prytpqwl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163srxldltb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qouladek.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bsnzhrdv.html


<!-- 参考信息 -->