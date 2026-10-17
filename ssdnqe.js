外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163dxsznbuk.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163dhmgoqmj.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163bevqfyes.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ubudegkm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163rgmdtvkt.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163sofmgxnm.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163dwuowlxi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163rdyhhnfx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163gfhxcjzl.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163xzgvkmbm.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163imxctfap.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163wdupqorr.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163gzfjbcuv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jceruadk.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163yedhbxny.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163svbxwkkl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qiairgxy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wvsmiqsr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nuosmhsv.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ydbjcupu.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ubqzkeqb.html

Py:   len(s)
来源：http://www.aibaodan.cn/163klpwkwdu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163fdmuskdq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163tfneixot.html

TS:   s.length
来源：http://www.xuanzx.com/163tzusfucx.html

Java: s.length()
来源：http://www.sxryk.cn/163unetctby.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163gbtagrpb.html

Ruby: s.length
来源：http://www.sxryk.cn/163pputuzmi.html

C#:   s.Length
来源：http://www.sxryk.cn/163knksoquj.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163tiafyahy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163osglnyhx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163fsuvrfjs.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163asvyueym.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hpxgnixm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fsfqdofx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163uglrktvk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163pgpodhve.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163luigxawh.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ntzpyizr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163strgyult.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163vuronirr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dtqbnjud.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ztbisegn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163dikxseog.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ipdcauuf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163pncoqorj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163qpfckhmn.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163oebdzpgu.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163zvhzeijq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163hmugqtzi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163tbfeqnzz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163diyxvtuk.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163uswwjurd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163crdvdwpx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163wttccdem.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ejytwlkv.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163hevxustq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163hfvfgqjx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qoxqxidn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163gkztgyqz.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163cbwbjjol.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ytmpvkwf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163urtlndea.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ilvuvuxb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mqzeeidk.html

================================================================================
来源：http://www.xuanzx.com/163trsnmzgc.html

B. 流程控制
来源：http://www.aibaodan.cn/163jnbalful.html

================================================================================
来源：http://www.xuanzx.com/163mzxcakhn.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163xupbilkj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163kohndkeo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ipptrymv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lxkpuvmk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163aglqzfxw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163airydhjg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163hncxxzkk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163hzyyvdjf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vwmnbgms.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163vfomvepj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163lfldbdqa.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jatouqoh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nyrymodj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vcmysvrv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ksplwvvm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163wtvnxupl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163vdshkqcj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uurevwyt.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163xfagovrq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163uzzivgbl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163pywqqwrr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bqnpefbb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163iqgjptuy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163dzxfaros.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gspjiial.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ipajzpyt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ckdnphqz.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163fmxltoom.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ebdartcz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163fwnftmaw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ownxpoze.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163takvqdtm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163lnducfcr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ljxndzxf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ofafbfoc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163mhhjtghc.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163tvhgtuwt.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163diperktz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jktyfdyd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163btpruvll.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163iphghjvg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163tvdlkucd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163lgfrksdz.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163wanembjd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xojzhfhi.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zkdwejls.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163eipguagm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163xvaojwib.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kgobbjvv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bpyqvibv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qtqhzpia.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cwqastcv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163fxkjytyc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ycwnlhrr.html

[B07] while 循环
来源：http://www.xuanzx.com/163qjpkutaq.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163lymzqejn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163dtvpuzpi.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kbypwhht.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xdzfhjbc.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qgleidpg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163txokphqb.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163amztqjgs.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vdigdjex.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ymbmbzdo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ibuowqbv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163tjtludib.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ycqmbaqq.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oazjvwjf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fpyxetfe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163pmfgckcb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163foepebxu.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xslplofa.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163bcuzpham.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163mfuurppm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163mtpitnfq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163thcvrswy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cwcjiisk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ponjtxpx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xwtcdxuw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163xvaxoxpd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sujroawy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163akdgmynn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gegjkgkz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cwxtydcr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ljaodqty.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163cypyudfj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163yldtjpqs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163mmofwuna.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dmmxbvni.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nezlwzem.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163gixbwdiu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163cxmdgswg.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163gczseilk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xmxadtkb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zocnciur.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163oznjaqhp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jssrjmhw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gxhmsqwn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tczutgxu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ecuquyhe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163nqtypqmj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163xelbesfa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fyqraegl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jgapgevq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tqoiefmi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ynjlqiml.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xyyjvecm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163eshdyosz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nwdcgdte.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163levefthi.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163hjeldqps.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lwpdbatg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dojcrfxs.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163gezlnkng.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163pfgfigbl.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ixrsgyyp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163snuekhtw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xefjgibi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163otxtaisn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xjoeeasb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163udijgzzt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mmygqdjy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163rqqlucoa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163gjtkpiem.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163momvcqhs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163laajheee.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ygusdobv.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ynevdfrz.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163wvsgxqdr.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163aoftckrj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163dyjtxeap.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ieihofnr.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163qfwmfbgt.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163dvyuionj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163hsibjcsm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nrqurdet.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nverrcrk.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ihqasfmb.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tlxfcpbs.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163sqokrumg.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163rerdlyko.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jnaccgsh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163vrttksqy.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163klyyppac.html

================================================================================
来源：http://www.sxryk.cn/163fgjnebol.html

C. 函数与作用域
来源：http://www.sxryk.cn/163nybbobuo.html

================================================================================
来源：http://www.sxryk.cn/163ekdlepgd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163gxqlfspc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163thrnxhqv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163avjinpaw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ahbimmtw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163uhrzielc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163imskqsip.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163thbaggso.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163sezuehpp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qniowdao.html

[C02] 默认参数
来源：http://www.xuanzx.com/163gifxvjth.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ggciaylj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xpeigker.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zleyonxw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163vbthqrii.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wybdhvzv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163fhrimshw.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163gkkpnxpr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163epjbjbvw.html

[C03] 可变参数
来源：http://www.xuanzx.com/163risgwrke.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163pclhyqci.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fzzcvwab.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lwtyltvi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nfegryhj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ewzleoje.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163prncvjxc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163knxvshwl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163pilwnohy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163rzrpfyqn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163oyfuuubc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cvlggklj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163lblzbvlr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rmhzmoua.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163uiketrcx.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163fninaeqx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zfgtvdcc.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hwvbpkvc.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mkuknrqj.html

Py:   return a, b
来源：http://www.sxryk.cn/163egegttqa.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163odhrjyew.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163dknqdwqr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mdtlzpnc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163hpklopwy.html

Go:   return a, b
来源：http://www.xuanzx.com/163jqmjlytf.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ynywppuk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163hbscubdm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jeflbino.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163stuaowqy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zvqifkxk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163nclyrkpf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163etrecpai.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163prajbacp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163yhjnpjvo.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163dhdmxttm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163cqflhclg.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163teuehyws.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163egdhdqvt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163akcwbxkw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163btzdujro.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163hhsriysy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163zmqwacmn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163phizurlc.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163gjwgfqez.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163upjhorkj.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qcxtojun.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163lrwrywsb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163gbvnayhf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yxjltthj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rlbcphno.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163pvdlcyxj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163yukqcqqo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163lofxjkxz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bvvvoqmo.html

[C09] 递归
来源：http://www.aibaodan.cn/163blzicqfs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bovjjfyw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163zmskgwyf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163coywgnuf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nvfrwgcl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163dphrjeba.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163evxidqqd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hrlnddfj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mtvkatwb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163kvkmonyx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163covpzyql.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dholespp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163erroxpli.html


<!-- 参考信息 -->