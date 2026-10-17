外链999!wailian999！

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163nszvjbix.html

Py:   len(s)
来源：http://www.sxryk.cn/163nhffwxyz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163utqkqiaw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163dfnzwxyo.html

TS:   s.length
来源：http://www.sxryk.cn/163atqsgwrt.html

Java: s.length()
来源：http://www.aibaodan.cn/163tkwevdrz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163wbquexbp.html

Ruby: s.length
来源：http://www.sxryk.cn/163ionckuip.html

C#:   s.Length
来源：http://www.aibaodan.cn/163jwdttlas.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163egzimzrk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ozlkexvp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163xgcroaoh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bepeioyl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gagenrkc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163encgbclq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163gefxjqui.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163mpvdllgo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163qgfjqysl.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163lsbwxlql.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163auqbsgls.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163xlsstvuz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163wygqbztz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163mgghppgc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ydrazxig.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163zqnbiuqv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163glrehder.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163jvtlaezd.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163qrpslmbj.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163zliahcrt.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ektwshwc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163pjufdkuc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ploihdhu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163livipomk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wolrzihe.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163llurrohn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163bihmyory.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163cauynylc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163vnklkkts.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163lpdpxosi.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163jcpwpzpb.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ioxtktiu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163okkgcauz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163hqtvokgw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ezvgdvml.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163qtspzbmc.html

================================================================================
来源：http://www.xuanzx.com/163lbrtesca.html

B. 流程控制
来源：http://www.sxryk.cn/163bktvbcql.html

================================================================================
来源：http://www.xuanzx.com/163nugooefq.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163hwzptydi.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163tdlxuhpd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163mwozddmq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163aeeuxqut.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163drcpqafb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163evmqbjay.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ptcuscki.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163tqinazyu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vqiefdkd.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163bnbazqfk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163skalyfkv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163guucocuk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dzsgtgdz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ptymszoq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163znrthmgf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xvxzxmay.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163qvqwbalk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dmrxybrz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163fuehbkze.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163gjqupxgu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yhbtamzi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163astngxkm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vnibqkfe.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163oeoizxfh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163mtiqbpql.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163oduisnbz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163tqkrkabh.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jvdivxbb.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163uzcdswxe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163okjcxvzb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163cquaycsm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ujdzfkza.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163acuwmepq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163lphtruuu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163wzcjjmfa.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163drbyaaoa.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163nogpugtr.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163klqooofm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163pxqtyyrn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163fiksvzki.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hxfwpfgr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ulaejlji.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163syqvturn.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163oqsdbiuw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163djsnhwgd.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wkzvhrir.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163eiukehbu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uqddkyug.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163znkmtbue.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wpvqemms.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163gtofqgmv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zxqomcgn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163fcvpqjvr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163useelesg.html

[B07] while 循环
来源：http://www.aibaodan.cn/163eioberot.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163mfscicnt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xomypcco.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yllidxvq.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fsoqdjzj.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hjoeobtc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163lwyraqul.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163iufgygdk.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gabkydzg.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163koswafjp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163bnzvfqoc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163vvxktggj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fdabgjyt.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163przmzqzk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nlbwaycx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xdvsncke.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163iesefrht.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163aamfiisu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cmkdqhyo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163obpajoyc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163vwbqclnc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uqddhooc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ycxyjevg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wmusdbcj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hceuugxk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163krniunpg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163upvstjum.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163jmalzmda.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163bzpehvvn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ikwzodtf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163wmwkcmzr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lktyngkb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xbkkmamj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zaqbiiol.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pjmxdnlm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bozadywi.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163joxrmyyd.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wattintc.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xczxrepg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163omlpywwm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vjziioqt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163encfxuic.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ikvciqft.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nlvbnvic.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163nfylsoui.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163jzdweqft.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163dkxncjll.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163cnogxwrd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rvwbatmq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cqmnhgew.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163eofygqdy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ghntjnqt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163lmyjbzsv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xabzlfzg.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ubfbtxve.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hpxuneiz.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163nulckdnf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dqjmdvju.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lmmrtaey.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163llmeteeq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vvmuygba.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163nuftulxl.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163sanfgkxb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163nvddukya.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tbktgzpv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zjcbangh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rrfjcjwh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nysppmfa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163cmcgomch.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163oruvayul.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163iqtwmtby.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163snnrkoss.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163nkdnmiea.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163cvqvczug.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163wrnhcdxd.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163bzcofqji.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163hnzfmisq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163qdzgoqrd.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ftykxipr.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163klamehyf.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tujtbuyu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163oulhnndt.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uqfjkbuq.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qdbgrayr.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ihercfke.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163sdofxpka.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163boqbhgpk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163tlcwpuzf.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xjzoedha.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qmvfxfes.html

================================================================================
来源：http://www.xuanzx.com/163nbpdxnny.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xqvqqizd.html

================================================================================
来源：http://www.xuanzx.com/163hpqojsyc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163cpskmhct.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163nbrljhvr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ycdjxphy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163htxcxfni.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gotmsedf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163itipizbc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xvvxwqzy.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kmpcbkbm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163avtosjnm.html

[C02] 默认参数
来源：http://www.xuanzx.com/163cvcagngg.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163domvytop.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163evtiohqr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rrocrndw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163nhshjzhd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163uoqjbqhn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163orbjyqyh.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163jgrjamod.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163mlitnoha.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qanztjqj.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mczuvllx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163nmbndwdy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163reraqkpp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163uhoptxjz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qmuwemrh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kodwmmqe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hzsrqtqt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163cufccekj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pgywlnoi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163kdhfemkh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ystyiiil.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jwvhbkvv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163xymxujti.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163rnljcdmn.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zfhtqveg.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gxzgecxn.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wnwquxll.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163tgngrbub.html

Py:   return a, b
来源：http://www.xuanzx.com/163ecepkjru.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163cknlpcza.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163lwjstpbn.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163mwbkpbbo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163qlhnnpaw.html

Go:   return a, b
来源：http://www.sxryk.cn/163rsvwhqgy.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163dqkealga.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163dhhsfmca.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163sbkqoezx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163urmvpfor.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163nrtgzpbh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163iqpagxec.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163dzigihvu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163rwjxjqka.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163mbgdvjus.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163cfqwsuxs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163cvkrxxmk.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163fzzbcjnn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163hwlretsj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163lryjnuns.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rptpoazu.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163tjxjjemz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163eyqhdmki.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zneinzpu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163wkqfpmjv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ezhoiedz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jjnzoqqo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qurbyhbr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163gozwkhbv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ucdyiaxm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uwtklwwm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163cpsqdlfy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163bymcmama.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ieawilvy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wdfhzqvn.html

[C09] 递归
来源：http://www.xuanzx.com/163twsxplhp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163hyuxnbem.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ssrfuaao.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pihxbwvp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zzoyplzd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zeongjzz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163khqtaphk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nvippnrt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163bhygwgzi.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163zilbraip.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163rznqlhqm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rzrnwhax.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163opflxmzi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ajlrfapw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163twxosmyg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163krmahhaw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163bbcirkww.html

C#:   块级作用域
来源：http://www.xuanzx.com/163plbzysqs.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163cywzzylu.html

Py:   from module import func
来源：http://www.xuanzx.com/163wagrqxov.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qdpaylow.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163gbpwfehz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163dlnqrdrz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ouaxiamj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ydkrhmie.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ceuzftmn.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gcxkczig.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163jkrecrgp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gsjqxljr.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dztuqzfh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hzseyxyd.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zculacxc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163lkuxsoqz.html


<!-- 参考信息 -->