外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163muevcxpf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163qjgnevrf.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163hwtdespf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ozxmypfp.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163fwgdpsnq.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163gbmrxkco.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163gkpbgabc.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163evdxfjad.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163vmhgroew.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tgockbcg.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163yzytynkt.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163jrinqrcg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wcsyvswc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kfrnqxmn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fhnfnwny.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ulpwxtdq.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rnunrazp.html

Py:   len(s)
来源：http://www.xuanzx.com/163bywvcgwq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163sqfpotwf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jrfooluy.html

TS:   s.length
来源：http://www.sxryk.cn/163utukaajt.html

Java: s.length()
来源：http://www.sxryk.cn/163vyiubupb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163phttskie.html

Ruby: s.length
来源：http://www.xuanzx.com/163guucpbmb.html

C#:   s.Length
来源：http://www.sxryk.cn/163zkugbdwg.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163vkthbdbc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163bbzctoka.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163cvhcjvvr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tznhafcl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163podahofw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kxxvqvbl.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163cjejslmx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163tvfyautu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163qvhzgkkd.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163seowmihj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163ojotubvo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163kvxtqsdr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163idedfvun.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gujvxtho.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hqbrevsc.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163hcjiyevz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ejkteqmy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163edttwppk.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163gwogvelu.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wjgtumpd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163cwgfowio.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163qpzbumhk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163myqosioc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163cpdvddab.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ykdajnev.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163yfpaqhtg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163gbywlqof.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163zopylcqx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163jevnjexl.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ycvfoexg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163dwrprjjt.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163vgcfdvbk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163rtuunzvr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163zbuffumb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163rvvuyltn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mmvlpcuq.html

================================================================================
来源：http://www.aibaodan.cn/163fruqpvuc.html

B. 流程控制
来源：http://www.aibaodan.cn/163tysqzjtd.html

================================================================================
来源：http://www.sxryk.cn/163mxcomrvf.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163njkiesar.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fcvdactc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163lrwfvpsv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vauygcjf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jpfnwkyo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hutvnreh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163fcsurfzo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163kjnoiagm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163azezlndw.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163drtuhriy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163feqsfygn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163bvwtzwfm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vztmbjos.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fkbkohfe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mlshfbgz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ohqkseph.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163dcqzeoxn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tnwzysiv.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ninzyswp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163znzhrphj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163fpfauelm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fovzztoh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163trquxobf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pakhppba.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163mqimqitm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163xjiowtgl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163odidkwep.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ctksubsg.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163oniqxoon.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ulvcmnjl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ddhoszgk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zoygbjht.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wyfnquqt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163iwugcjqt.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163gwfrdvhr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163tvebipap.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163prmzvoye.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163byaqbhqs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163mcvazdji.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rhruwaua.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dzsmbufb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163viudfskl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163vdudxddv.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vomnhfsu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ympnlxll.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163brehvfdd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163jqcvbwke.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163njeytvdh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zpyytlqb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wwvtwryq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163tpkufzgm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163gqsdlpcd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dtklhixx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mbzzjwkq.html

[B07] while 循环
来源：http://www.xuanzx.com/163efvwbsxt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ewinxzmf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163fksqhwts.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jaxsiata.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rvukbyov.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163igiexgjp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xhaizdhk.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163blwsawms.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vtfzloty.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163hmqrbvwy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xawsxmbk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163iwnxiyuo.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dnooutfj.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fnvpbqsn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xbuanknd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163tzwsgyjz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163infvqcrq.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ptkaumiw.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zzghsrks.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tblxknas.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ygkowybz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163icamlgdv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uqdlhxat.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qphclkow.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ujbcyauw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163twkufmvy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mxbqfivh.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rcmzbpvi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bmkpodkl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hkzagekn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163cplsrdas.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163btckmnnb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163uaqgqqxg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163avsupqox.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163vyewwkar.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163uidynlck.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163omfosowj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bjaawczh.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vhlxsidy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qwkjrvsv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163trvpxbwc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ezlbrewx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hytytdki.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163kpyykews.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163kfwtucke.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ejxlppqv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163zdmpxatl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163piztusps.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nsknqpdi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ftmkqyfy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iijmmkrh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163fsudiszx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ceekscgw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163yopmjhmw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163vjhcssrh.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hrprechi.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mavalggm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163oiwkvmla.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cvmwhpgu.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163wxsviujv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mrhbueyj.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163rsbshnls.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163myeuddew.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163caaeggjt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uuvtjfpc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zldcekrq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kfixlxoe.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163exfnruxd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fpizesnp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hxwnnzwt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163xeoagbir.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163anboyzkw.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163grlplhbn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163jpwbkasv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163rbawonsx.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163akabkiot.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163uwlcegvk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163awuigqmy.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163aoymepoy.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163tgthokmj.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163huzanbma.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163wtwomlhj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163mczzjwtp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163vcmanxkb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wpkygjhp.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163pluulrii.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jvpyczyx.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hsttovxr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xzwyphgt.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163weuliltc.html

================================================================================
来源：http://www.sxryk.cn/163mgdeltba.html

C. 函数与作用域
来源：http://www.xuanzx.com/163sryfmpkt.html

================================================================================
来源：http://www.xuanzx.com/163calrfaby.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163smbyvnqf.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163dlnzhrlo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163oqvybjiu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163nisyxcmq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nvpaduhe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bdouweiu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163pjypeabr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163xnrbxsly.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nrtjjxks.html

[C02] 默认参数
来源：http://www.xuanzx.com/163cqdcuizf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163fltjlmyo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163izyjbyvt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mwldynjy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163cacyiwyg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163dxrzcimp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163gyammlwl.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pwrbnflu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163btpcuxni.html

[C03] 可变参数
来源：http://www.xuanzx.com/163cowznlmf.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163maqvsdiu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163lznlmnne.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ambsyfaa.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sfmxhfxb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ucqqferx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163iqmbvypm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pqassscc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163frlmjnmb.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bhhtjtlf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wzcounmb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163zuvrapcq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163gocpcmpt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ejhnfiwy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163achyrccz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qylyioah.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163somxzkms.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cgrriugv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ztxdtrwh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163rweizfad.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ynmxzlxd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163vxmkawua.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163dykfqhvp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163hhkiorfs.html

Go:   return a, b
来源：http://www.sxryk.cn/163qgnvqers.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hbqikoze.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cohbqywn.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163bennnepk.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163jnonxtwh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163lndpcnzg.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vrpopsva.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zskcnsxp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163uasltmhp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qhcoakoz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nnmqcexg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163mdxkgqix.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163nqrwiegr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163oawwjaeh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jljgwlzm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ykzjdxyp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lhutxikk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vcbghxsj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163urkxmzvi.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163bfsleedz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pzmlxfuc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fyaejdow.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ljstizig.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163zjzrgmbg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tvhnyrak.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ecrcsfek.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163exafwclt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163eypmhukz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wsdbazql.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fxcqkmfk.html

[C09] 递归
来源：http://www.sxryk.cn/163qzomvsdk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163tomrwavd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ivlkmebd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dzrothzw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163oyjpgtvs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lswegpfb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163tokuwgao.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pvzibfhv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163fzkjlvfy.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163mwatlpsq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163dbbtuaka.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163nbevkahf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kxtdttrj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163osnxwytp.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rcseiheq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163iynpzkoz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163wuiuospx.html


<!-- 参考信息 -->