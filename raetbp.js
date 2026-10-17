外链999!wailian999！

C#:   s.Length
来源：http://www.sxryk.cn/163uzqjpnlh.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163fwvttuwz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ftughfei.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163quxclagl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nokkueew.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kunrrdjf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163cdjcgeic.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163rfizcuzh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163kerolijy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163nprmtodd.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163dtdcdvdb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163fssihrzg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163hnziwwid.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jnughawx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163chlnkytx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163lqcordcj.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ksmpsfwe.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163bwftmmpi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163bufldxei.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163hxswhlcs.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kgodyaer.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163amlrwgmg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163nqvoftdl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163sgaenuwj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163wbwvaafs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163zvsbvnxa.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163onsxmkmw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163mjsrudfw.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163sbilqzvr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ncuiqene.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163hwetsena.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163chmmmlyh.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163jktsssjz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ipmekeuy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163nbarlzjp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163jifyfght.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163xjakmdzc.html

================================================================================
来源：http://www.xuanzx.com/163dowqnavg.html

B. 流程控制
来源：http://www.xuanzx.com/163osvnaysn.html

================================================================================
来源：http://www.xuanzx.com/163wttbujyd.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163wjkbwcyt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vhhbieyn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163tvmgzgwe.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ybxzxmkq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163njiwgabg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mdzxwnhf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163gahtvylk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163nmyriddn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nipqekla.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163owlvyffp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163kyudllao.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163tzyvbrzz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lplkhuhi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163apjqsvso.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tfuykseh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163lfblsoef.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163lkndtcuj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ijeqjfje.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163gubhress.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163wovjrcfj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163knuhyjco.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163cuotnxky.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yanbixch.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163effiznhj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163teuxqujo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163kvhzklgb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163kynuasyp.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163pjhzlcfs.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163dyrmfyio.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163xyfuzcfz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163eljlhvvh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qqgmpqfx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163cmwyjnqv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163dbdfclyy.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163aqvinhpb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163fzevddxy.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163mviyclug.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ebfeztob.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163nemptqfh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nhathwik.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163yjnemxwu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163tksxjues.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163duboedaa.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ieundthj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163cdhkhcgk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fgmejjzs.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gihymmcx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163nmmkpjke.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fkgiyzlq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nfcappru.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163jlwbzhse.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163jqdwocfx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163mnthrvcg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mhnnxgvg.html

[B07] while 循环
来源：http://www.xuanzx.com/163qfsxmdpv.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163vodiflta.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163nscapdme.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jidhirgy.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bynrwtjm.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wcsirjch.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163iesozrrm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qvpvsxmg.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qmchbwjp.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fqdrgfny.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163lgmrctkl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163xkwqbztb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163drjcvuki.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mievwjey.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jzvmcggn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cdaxjeso.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fclpcvee.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mpuijcfm.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163eqqutyqj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163rimnaydb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163dsyxznpe.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lkarhnuf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gxgmrbhe.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163syvjzzsg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163unueglex.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ryvwsgsn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163brducstm.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163qijdpjbf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163euvnvsdu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163hbkeovms.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163iuijimok.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ckodrgjj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163klllcudj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qziqtsjb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163iuddswzi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cbmuuvoh.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163bgcqtnjd.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163yfniadhk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xaxnqpvm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dmbbcywk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163nbgfgrry.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163asyfzenm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163yywaomem.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163snnnsggw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163lnaighdf.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163qasmiwrk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ahdqpsev.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163frlujane.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cwgsufdd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sekraukm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jipcjoud.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vzztomkw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163oamoagho.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163zhycfkqn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163uvzwovkr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163lsjkmnwk.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hobemljj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kiyzxbix.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ixasuefb.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163pdocdbkv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163belhgdto.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kqldwofv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163bmmqynou.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vqdxyflf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163eybkritn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ifrgczsr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163namforgt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xlcoqhdl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163enwuralr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163xhdcjtsh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wantcyqf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163kvgiivoy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163flyqrwer.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163tzeprkrj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163txltafhd.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163sargvfsc.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163djvuxggu.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jboxwary.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mcrhkihk.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163dporzrpf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ocizrztl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163smxahrsy.html

Py:   if not data: return
来源：http://www.sxryk.cn/163exqcmnbw.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ydihhdpd.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163gsjofbfp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163kauknvvo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xqrmfxrj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163pnenrmez.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163lhtajkho.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163miapthya.html

================================================================================
来源：http://www.sxryk.cn/163hmebyims.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vqqiyxvg.html

================================================================================
来源：http://www.xuanzx.com/163dkkclvvj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163bnsjmtjc.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jmhhcrhw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fefuyems.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zvkodoor.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163grpcipye.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163liugavjr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dkhekiih.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kweycpjp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sjljhynv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163sjtppghi.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163btatczhx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ycaorbbd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163bxgidfxi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163swnguccs.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jzlkkccu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dnmfjduj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ikahiuhk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163jogzcdax.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163wxucycka.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163yviavlyc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163oxdcfcwg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fadsmjsv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ozsgirfj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163elnhisup.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163nbankviw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163petgsgki.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mwgqthnf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163acvgzpue.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163sztfixqf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163mkvskbyw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ffkvzmfl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gdtuhxdd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163wvbiszwd.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163uqfbyqxs.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mkepubme.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163quufvoiq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163awvdvwhd.html

Py:   return a, b
来源：http://www.sxryk.cn/163poitylwv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zfoigbwd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163nbkneelz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ihwshpvc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163rljwzrjm.html

Go:   return a, b
来源：http://www.aibaodan.cn/163thfolnee.html

Ruby: return a, b
来源：http://www.xuanzx.com/163odqsnxos.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163nfeaxuvs.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163kggpelzu.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163jaalndik.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ltnvocnw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163saksodfk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jyokeiik.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163cqctzryb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163rilnjwey.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tsemlavo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wotuxnko.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xsniitbu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163gcakttpn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163pbjtchow.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qmpwtcko.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163zriceaxv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163oigumlbv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163vaynpfkz.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ypeqdfnr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vvhflqpv.html

[C08] 闭包
来源：http://www.sxryk.cn/163wrxinhma.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ueyweget.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ckietfyx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nlhhyqfa.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qepgpedq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163nqvkoqqh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ureukwai.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163rizrkasg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163culvlrka.html

[C09] 递归
来源：http://www.sxryk.cn/163fwhhjtbz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163fjbnpdzt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163yaaenhiv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zyflyusm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uslebfcp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ujiearmj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163mnhrhojk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163momtutqd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163nfpcopfd.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163mxmroyqa.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163zyamhzeu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163kcbwrqes.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jqefobft.html

TS:   同 JS
来源：http://www.aibaodan.cn/163uynjkdus.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163guneyubv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163phetxusd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163rvdpaifh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163kxotzhsi.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163kzpntyxz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nywyhmtl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xxkyubra.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163myfnjypm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163btvplpzt.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xhjtrulq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ttmmorsf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163qyefocti.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ifeimobj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163efslaorf.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wssgasgy.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163esluwctw.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163htsfnovy.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hftoktlt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163taxgmnsr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163osikgzld.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163selwlrov.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163kfgmgicp.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xvmyaaww.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163lhwrvzxb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bcohpkfu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dpzsdrqa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xrlskbje.html


<!-- 参考信息 -->