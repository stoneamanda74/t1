外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163szsqqodu.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163bsefiahc.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163gwfrrtzj.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163mlqyitfe.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163jacealzj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ebtjbsqt.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163bmwnkaks.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163jrhlpsjx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163lxxhgaex.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163pslkkhub.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163qnjarolx.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163unbibldo.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163sumjlxqn.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163upazxqhv.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163tnrujohw.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163dmregicu.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rlxrmosy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dctmlquc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qzokqtem.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163pxzriolk.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163hubvhzqe.html

Py:   len(s)
来源：http://www.xuanzx.com/163trrdughb.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163msktqicl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ntapmlcg.html

TS:   s.length
来源：http://www.sxryk.cn/163dazjayhu.html

Java: s.length()
来源：http://www.xuanzx.com/163gbhghsux.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163yxoucyzj.html

Ruby: s.length
来源：http://www.sxryk.cn/163zqvawzzl.html

C#:   s.Length
来源：http://www.xuanzx.com/163idyjkvup.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163vwjfhexe.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163nvxvskhb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xjjhwrfo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163oceumhiu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gfpssvxe.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bovbqqai.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bpmzbwsh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163xjubrlrs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vyoaopfu.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kltwtmpu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ronnhmqv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163bgmortdr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163eryjgqft.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jehzpqae.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163fvlnhrcv.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ifpvuuro.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163iajgrisg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163evpijupi.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163mppoodhu.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163uwogfrok.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163xqcqvsyq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163temndcqh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zcxyueal.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163cuxmpasd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163lhjernpi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163wkhlmeqi.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163szyyvxtg.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163cemjndyf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163juoescua.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qtoczeow.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163hdbwijlw.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163onhpgklz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bhtbatip.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ewayzqda.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163xxzkbrsp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163mpeeanrs.html

================================================================================
来源：http://www.xuanzx.com/163pxnjneyc.html

B. 流程控制
来源：http://www.aibaodan.cn/163yupzadto.html

================================================================================
来源：http://www.aibaodan.cn/163kjiascpz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163bexznkat.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jeqxihyl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163votfsbed.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163osigmzzg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vjxllfsr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163puinlykd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163kxkwrfcl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163eephmcry.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163auhlysrl.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163scewgqas.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163dvnvblnb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163wpafaavx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163myzyftec.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xxcxtbvq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163czrutgzd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163efbvchxn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ygjfzifs.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163medbrzuu.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163hychlpzx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163luuyclzv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ncxmroxn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tnjiksxu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bxodbhrm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163laebvfwe.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163cmxtgumo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kokwwdtl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163yobccckg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163nrbpjusj.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qchzpiup.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163mymwqhmb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vjhhnail.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ccczskjb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163tcnrsxel.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163mgysvblk.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163cotoirqp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163wsewylty.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mrlwiprz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163svzofpld.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163yyvvejsm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163pmvtgtvy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163miatfhwt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vlyzlxsh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ywhcgrit.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163kufpfqal.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163dgebdbrb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163vrqdgmal.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163jpgkqfpl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163zzxkjhyo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wnhzovlc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163azcldnho.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163vbldcfom.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bhjqeqrh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163onjefbcb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bmocnwqg.html

[B07] while 循环
来源：http://www.xuanzx.com/163gfdfgvdn.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163rightnys.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ooeqmhcz.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qylmjsrz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163oqpbvcfe.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wyuufbld.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163enuhwbzk.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163zmktzzdm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163firunrvb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163qjbrmbsx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163otzeexmg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163juqsqrau.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zkcoybmb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zrehhipr.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dszychnm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163maauswcy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163tbeksvqd.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lzmkqkjc.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ykhlnumh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163foyxfkbz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163wtoerrnl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vuisvrmg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hzjxytby.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oxugttzz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rattxkjn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163aviwhnvi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163deugwyik.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163kndmdaro.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163pznnglxx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ljzqorjv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163egiwmuab.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163btklydze.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163lxrigqvn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jynfbqpi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jpottjqa.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163hkledehy.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163eqheebxy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zgxduyzy.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163hutgpncj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163oajifxbx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vqoswcfd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163pigdjwkp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lhdhpcct.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163tbnrexcp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163lexvzsxc.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163pvvspuaw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163rbxikmso.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163tiyqisqq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qeibptnn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ewsitxfy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dhujfaid.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ysqgydst.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zusgttrb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163eozuamfy.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jtfkpxch.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ieogcoin.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163dzrwuaim.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lsyvwntg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mvxaotoa.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hubbippj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mbbrzbab.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163eimpwise.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163izryzhol.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163sthyqvtw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bhlgyxja.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163phrjznvg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dtfqozvn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163paykgfqg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ayvsfrtn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163auktjvqz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163atwbnbwh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pqqxvpmv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163dwounsiy.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ertlcdav.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163fshurttv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ozsqyudl.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rdmljaja.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rfctzbef.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163xcdyucok.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cnhovkgd.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163acicycub.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rnkuknxa.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nbezakog.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ntxmkpkg.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163pmsveiyo.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163oleudmvc.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ffluoljx.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163creilqpg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163unjmxelb.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163rrplowjn.html

================================================================================
来源：http://www.xuanzx.com/163oplkgvsw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jyyasiok.html

================================================================================
来源：http://www.sxryk.cn/163bsypojaa.html

[C01] 定义函数
来源：http://www.sxryk.cn/163xiqpkosv.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ngscejvc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ctifnnxh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lsrblvbs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jtfhbwmu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dlukprry.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mdthpsbn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163imbmvxkp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ymvgvmze.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nfaxgbaq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163jxgrydcd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163pnhxdfes.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163sypilmlb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ttrgabmi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163xunxhidu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wlgbstgd.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163jahcicxm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163yugdwmmp.html

[C03] 可变参数
来源：http://www.xuanzx.com/163adzivcyy.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163aoalpmov.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jaycvanw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rpkmbwno.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163empizciw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163mxegfxsf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bieepbbd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zrjjtlzc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tfvmmizh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wxsxogur.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gegttwbf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163bodhfkdp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ywuausky.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dnykrmqx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163gxfzuyhz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163bszulhqu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pwoqedur.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163teluhhnx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163oytrzdgb.html

Py:   return a, b
来源：http://www.xuanzx.com/163exnguczi.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kasxyueg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163fltbsijx.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ltichwxp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163gvzidgcj.html

Go:   return a, b
来源：http://www.sxryk.cn/163kaxdsggc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163eliodjvf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163khiwphgl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163reyqlhbx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163aozoufnj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163mgydivdh.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163onqwuplr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xhpvisxm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qiuaqyhw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163cjrjhytx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ozidelyj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ltonwvnq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jewexccw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ehlqcnto.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163vhdvncrx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ndputkmp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163xowgtkxb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rsdjevcy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163shwmpxei.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vopdklfs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163nlmkgsvg.html

[C08] 闭包
来源：http://www.sxryk.cn/163ncuwkvnv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163uzdatwwg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163svanqwyh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oeppsocs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vxcurrom.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163atuybpin.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xorjeymp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163pdeuzajc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mmqigdof.html

[C09] 递归
来源：http://www.aibaodan.cn/163uepqosfy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163wqptoksa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ntnycdmt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163awfkfjwj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163eoletwyx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ifigxeke.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163awqdihnq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163mkzfvavz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ojccewer.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163erazlhyo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163kpfojdfe.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tkreggte.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ouagoaie.html


<!-- 参考信息 -->