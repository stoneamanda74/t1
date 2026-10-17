外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163sgkgahdb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163sxzgjrcc.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ywpdyolf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163stbhkeyi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163kchqfuxp.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163bjwzgupp.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163dbemrrnb.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163xnybaqyo.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163jhymaypf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yprxocqs.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hwultxbb.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gikitpym.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xhxpatpb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pmhaxnzw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wiglctvq.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163mektwjax.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163mdzlfxzp.html

Py:   len(s)
来源：http://www.xuanzx.com/163lwtmtgmb.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163dqkvcwch.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163uyiposmt.html

TS:   s.length
来源：http://www.sxryk.cn/163uivqnohh.html

Java: s.length()
来源：http://www.xuanzx.com/163ajuibeev.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163plqojvac.html

Ruby: s.length
来源：http://www.xuanzx.com/163jxjlahkk.html

C#:   s.Length
来源：http://www.xuanzx.com/163qnsvubsm.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163bkckexze.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163kxtcopcj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163axsgzcyr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163sqlgsrsg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163niyteqpf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bwvjemek.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163nqqektkv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163urxngdil.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163fwlqwkag.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163kkovharg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163qpfpftqf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163xkzppuka.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163djbxbtut.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163yrmhsztv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163yphhgwpg.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163rvhrghhl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163yduefgdu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163gucqjvtt.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163iegikzsw.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163frrgikht.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163wqsmarvh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xojhkvqi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kapniqyb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ufxordvv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ukqfyfhm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163tssthchi.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yyjmznoc.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163fqdyzvlf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163itmyujsh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163evnjxnze.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ybtjyvyd.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qijxfqup.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163szzmtwyo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163psluwvff.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163tjgfxdwa.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ffcrsxqy.html

================================================================================
来源：http://www.aibaodan.cn/163pioiqkjn.html

B. 流程控制
来源：http://www.aibaodan.cn/163eitonzzc.html

================================================================================
来源：http://www.aibaodan.cn/163klcnvydw.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163stqncwba.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163amagrlem.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163zfraafwi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rryrergy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bacgrkfb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zpukdlwb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163znocbchc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ieswvtyo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gigoqtjv.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ofvgreya.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163fmpsuwqe.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fiahvksv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qwtqzgje.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vjyedgkn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163beqjeuax.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163sinqaqks.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163sfldhdsw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aflpjesw.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163iextsrud.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163tidrafxs.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163iqndtiav.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nsorliud.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163iustrjwl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163dfusepgm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163kcsamkof.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163vnpwfuks.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163qhzmizbn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163dtswbxmd.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163baqncihg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163gerdpmjb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jiwphget.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163boqchqog.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163dvxnkpsf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163lmnmaavs.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163qxnziqmv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163caqjushv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163oukfbvmo.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163btxsscvh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163onpsgcwm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uerltcyi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nqnhlodx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ftlphxjz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nbacedtb.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ccwdqdyb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163axfwjjpk.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ykuopfps.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163xdekmnfb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163tyqwmukw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gpjjjivn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zrhejqbk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163jriqaeje.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ccfjrvla.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163xgajldwy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163lpgjwjkk.html

[B07] while 循环
来源：http://www.aibaodan.cn/163lxvvaejr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mlhuedcu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163hrhlfrey.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dcdbknfc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tcokhvtz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bdzmpwcc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kdzlnrfg.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163rhcawfbo.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mstqozss.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163xhemqytl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163jeptbhvf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xtzngnza.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163anixodjw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163moepuanc.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wifvkrmd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tkjavpvz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163swryhjid.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ndbmnavl.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163nyalgtey.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tvahwrdz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163xbqldzwt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vjlergcf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qpxnwxio.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xgbjbfik.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163rptspjdc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163qjbpeiwa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iuoxqovo.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163kkxximmd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163asbypbhd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wrlcjlif.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163kbwpzrlm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163deqemkox.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163qlhnysxf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163stnprnyh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163wblmvibb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163luwpyvpk.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163wpjauarq.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163iapirrzy.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xrgefkjh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163esgrdxfi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163onoguyov.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lrswxzbt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163aksdijkp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163dzzcdlxa.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mmfezuqq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ixdsjwdj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ptzyaydm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163rysryyxx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nccppffa.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xyiiqcxm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zjjysraj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wyjzhvvz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163nfhwpuqt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gljgpthk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163serrrwbp.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163zaghwpns.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163zkkpklel.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163skyagbll.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163eqmmaqbk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fojajknw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163iwsmdptx.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mcdlhtcu.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163atvsotyy.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hkwrcpbz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163zirjidst.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163apkuygll.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wtwteeer.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163iofquayf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ostefrpe.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xsivpxyt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ohiyprro.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163cvxiymyd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163scjoftev.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163tglpwswl.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ozvgqtda.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163yjslnkrx.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163mpughjxq.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ddxzmqbc.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163bziqddvv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163yfnhtbcw.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ryczqjxq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163iymheufu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lcbrigzg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163bbxjoqjc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163rvtopdcw.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163tayhfnvs.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ucscoyic.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163usyaixvi.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163bvyzdohb.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hafihake.html

================================================================================
来源：http://www.xuanzx.com/163yjeiatlh.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rxrntcxn.html

================================================================================
来源：http://www.sxryk.cn/163ybctwuiv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hyiyqjow.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163freuafix.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lymcpcnw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cyhlbeuw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cwjtwmoa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kkxojhpm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163oronaysu.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ukuvvrwh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fwxeqsoa.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gkfhyzdt.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163tehveinb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fgvvvwec.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gxlqaipn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vwxhnupt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ifjwrnua.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163punaqhys.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163odfuutkb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ptdfvsnk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xrkfrhas.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ucmzzaph.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kardwwsg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ylcgnjpe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nsueqqvl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163toauddyh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lwflmgot.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163zdeqnoza.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163sqrbbrnb.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163sriwcjpb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163rhidkalj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163wqosfset.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lccpxhbt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163thlqfosv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ixckrdpj.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fnypjjwl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163quelfmmd.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163febxlgrg.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163tlkpoqbj.html

Py:   return a, b
来源：http://www.xuanzx.com/163ggzdpiiu.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hlznvesf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mojevazt.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163pucgmyfu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163udjrgdjo.html

Go:   return a, b
来源：http://www.sxryk.cn/163xdfrxrhq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ghdoffmi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tahwnyxj.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163lhlfxklg.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rxxnqzsk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wckejwzl.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gdzfxdjs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163dbqdvyxu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ncowmnze.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163binipqih.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163poqcxpyw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163sdwfoseo.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cvnlqcra.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163hhoqxkyx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qlhziwta.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163zozexqfl.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163pnzapqbz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tczkwxqc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hxplxkye.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mxwuguex.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163nqnfeawp.html

[C08] 闭包
来源：http://www.sxryk.cn/163yyprxklz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163shbcfjrr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ndlslrgp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cdxwwgyx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hupxhifm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ucapykgk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qllwxunz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163airhadld.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xwdqhrfx.html

[C09] 递归
来源：http://www.aibaodan.cn/163ochjfbrg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163uezpptyt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163hvfcnihz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163elwvzuju.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hjgvctmd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163zlciweai.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ziwhkuex.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163tkcrqlee.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xduojycj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163udkbmubn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163jzakwels.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163totlimqn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163boebnbkc.html

TS:   同 JS
来源：http://www.aibaodan.cn/163bkgsdytw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163miwrdhsq.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163funkpxkd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163nmhocjdj.html


<!-- 参考信息 -->