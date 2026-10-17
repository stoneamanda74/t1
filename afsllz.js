外链999!wailian999！

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163lagxjent.html

Py:   len(s)
来源：http://www.xuanzx.com/163pyztcbwu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163zjzqocog.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163vnlmzodg.html

TS:   s.length
来源：http://www.sxryk.cn/163pizwfbdy.html

Java: s.length()
来源：http://www.sxryk.cn/163ejonklwo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ytwnruiy.html

Ruby: s.length
来源：http://www.sxryk.cn/163jkrmtlsi.html

C#:   s.Length
来源：http://www.sxryk.cn/163kecttjzg.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163sewpmksw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163jqtsgijo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163reqzyeaa.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vxkznpeq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wybdbqsy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xvmlqgbz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163cfmbwzyw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163hqkyfrqo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163zclsjmmt.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163hztkonfz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163bmgjzhdz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xnuqqjbn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163fjvshlli.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ngzyhtxo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163oiolfqzc.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fafgerng.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163eloyjbnk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163lbcwaepp.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ahiavquc.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163hueqcqpn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163jcfxykea.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163myiktmbk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163imbmatnm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163iustzdkm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163mlekbugw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163rxssjlps.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163euxltrbp.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163nrcexrbg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163lxylfcsh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qguvzzxk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163qecliqmn.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163axcscdwt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zliudjrb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163dvzugcom.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rqznricx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163arubxgvd.html

================================================================================
来源：http://www.aibaodan.cn/163agkwnmeu.html

B. 流程控制
来源：http://www.aibaodan.cn/163mtqfixfz.html

================================================================================
来源：http://www.sxryk.cn/163hdxfpzab.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163bkvgnlsj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163crdxukaa.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163hjvgszwo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tanipbho.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cgbrxhsr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ygwgnezu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163stuinfbx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rdrencep.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xiljmzue.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163bylgtivz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163grshlcwt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163aiasfejs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cdjpaofa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163audawiaz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163buykahli.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163dfgezqwl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163conqwsdv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ybtbcjla.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xsdigofe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163yguvdhqj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163fihqjioa.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163tzpklkts.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pcpduhjk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163kywngnti.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163mgwhmhzg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163lrtovypd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163evxfance.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163bpmicfvj.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163nnepxayf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163zmmiqrft.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zepxzbtv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163auyynmuh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hxekvjoi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wpxnyrsx.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163yscvxbdo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xcofhxkx.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163wkehmett.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163yjjsjefi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163xsgajcnb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gztyoesn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gzggluaw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163oobsaiqs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163dczgvefh.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163eplvuoeb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qhotpxck.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163qrlssauv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163xlstgenx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163snmdqure.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163iovxlqsl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qwrfzyop.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hdjsrgpt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163bhclazbk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hexbdbkr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163xykfywfp.html

[B07] while 循环
来源：http://www.sxryk.cn/163wtfrizyd.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ovqvkgdc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163uqiqmwbb.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ekmgpoyi.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mumiaisr.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xdcgcymj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163owqcllza.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163eoekryzz.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163csonrfzj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163kjzfpbxi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ekrdrokq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163qqedjcel.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pcmwppqs.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jwpuliyl.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tusvxahn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tkvwssfy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163tfgzhzun.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dwvhnqby.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163clbyemnv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qfljrpcj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163aceifxtd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163avfjlrjy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163prrmxfzx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163doxhrjcy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163juqibokv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fvcudlua.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qbdugbeb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163hevriqaa.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lkxidaod.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163mpsoeldf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163blbsatvi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163nqbgxxyd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163phfvuzmd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163nxzhzsod.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ochgjbzo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163gkxvvfca.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vmhbnpyd.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163gtnzfbam.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163krxkzygf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tzpykydy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fwlhobkf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163gcyipmki.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163sbzqbuzr.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wcmnnbtw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ddevgdeq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ojszlfvx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163uluoemrz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ouvfzydr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lkeopqsr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163aqwocjhk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dnxrhotb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163nmgaabln.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163bjzerkap.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wvwetulj.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163jvgaebjs.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ywswoqre.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ljoctfiz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fofmymrk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gnfxuvrg.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ljwvkjtq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163dopqcami.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163irskutwc.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163eiqxrhfl.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rpzjpypn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163sstrunzh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163fqmkyuix.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vntuvpyb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bpcihsba.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163oakrccor.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ncxndzhj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163nlhhtoig.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163lrariggy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163sgpxbhxp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163dtonqief.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163xnlrjdgz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163djxtaklw.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163woqeednj.html

Java: a && b || !c
来源：http://www.xuanzx.com/163hmvmpmlt.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163cgkvfhoa.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bxhxwpbn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163xwaxxvco.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lkqrorvo.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wzipssxf.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ezdztgcf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163eifdsbfr.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163niqlwgab.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163hrskdkky.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163cgdrmnds.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163dfewxnit.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163tnjngdxo.html

================================================================================
来源：http://www.sxryk.cn/163lomsqzdk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163uvgpowhd.html

================================================================================
来源：http://www.xuanzx.com/163fgouvkar.html

[C01] 定义函数
来源：http://www.sxryk.cn/163fycrecwn.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163susrlzlk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nxxjomiq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163uggrrzav.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fhavhlim.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jixmhnjg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ymioyvmt.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163fjcjluet.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163prllaejg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ngzyzlof.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163sgsloeia.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163tgfiewrl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cbybqpmi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163wrxncrcy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163blpalnar.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ttnisclm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163owfebwce.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163lmtjoeqh.html

[C03] 可变参数
来源：http://www.xuanzx.com/163imvidtae.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163pbubhrtr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163amzqahqu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ywssxqgj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sfifndet.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163xvacplqy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rbokkwof.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fzskbuax.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ospmyoyp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qasxtptb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163lbamyafp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163juzwhzor.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rpgnyjmm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bgsutgqd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ggrirhlo.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163wmbpnbws.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163usstqlaw.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tnfoklll.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jrqrsfjw.html

Py:   return a, b
来源：http://www.aibaodan.cn/163medqmyup.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163fytatogx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lxseshsz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cqwjwjwz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163aesgjzwt.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qheblqdx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fipqstra.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163aimbyhte.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ocbrtrxz.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wblwjdxx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yxpikots.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163odjrjxkz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163atslgzjd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163syuxwdbs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kezpnjtj.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ufdprhfg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163fplxzrlw.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gjcbjhzg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163sdhahomc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zlayhxzw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163vscpjkci.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wqjjumcx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zffotyzt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163rzgdzuyj.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163rpxlhsin.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163scnjfitt.html

[C08] 闭包
来源：http://www.xuanzx.com/163twxonbdr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163cvdqwkms.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163alckojuv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bmfgvdtd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oakucifl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163cjenkkbj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163sthronwt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163nbwbcsaq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rkuyprqy.html

[C09] 递归
来源：http://www.sxryk.cn/163dpaomwij.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163irfpggbj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163uurykboq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lcrdndid.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qhatqonh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zlblfzuv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qjrxhzka.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163vslniira.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mzzfoxgb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163purdthdf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163bfqefdlj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163emlhqhfe.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163pxfoomgn.html

TS:   同 JS
来源：http://www.xuanzx.com/163igljisht.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163avhckdsn.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xwanxdhm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163wadasmvu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163aquvpojs.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wmydgkrk.html

Py:   from module import func
来源：http://www.xuanzx.com/163bpgrnisz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cinkpexe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163hzrapixt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ohwychoe.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163tcbnwond.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163pagunbob.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163codehziz.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163jmdyqpoe.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ornmjnyj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163hqropcrc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qbnofvve.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qddvqsyb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yrohexvb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163dtocwvdw.html


<!-- 参考信息 -->