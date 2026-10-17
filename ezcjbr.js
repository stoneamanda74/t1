外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jxkjpmsy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ztszmbli.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163rccobtiw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163hzftmgon.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163uozdlryj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ftneknsc.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163demptqxc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163fcluvnmb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ejyhnxdp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bolehiqo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vahuizvs.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163upoxfxud.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163otpeadna.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163cyslejtk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163banxyajr.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163pkyxtezx.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163akkupqxo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163uufziooj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vifkydfv.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163efzzyonz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163orpvketj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163gegsoklc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163qlmzujpn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163vlmfvfup.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163qkiybhyh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163awdhwyje.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163dujflhhh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ecsrchzx.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163wblgpbfm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163bkkbrcfl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163hegryypx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ujsuphob.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163lowdtyxx.html

================================================================================
来源：http://www.aibaodan.cn/163ienjbepw.html

B. 流程控制
来源：http://www.sxryk.cn/163eyjmwqug.html

================================================================================
来源：http://www.xuanzx.com/163axticrnf.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163lgwcmfwz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163mzdrefnj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163klaaglys.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bvatzpvr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oxnplscg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cwpocjda.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163solselxs.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163jatknncb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nlifnmww.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163qddugkos.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163whkyzctr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163grvaqomg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xfpymgwh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vsujcuib.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163huxcyjxx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163fmomfzsv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ymgjlttd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fyyodzaj.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163fkiyjeis.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163bropwgqh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163quyxxkbp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163linonieg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zkdfggfw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163lmzjmzpr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jaabratr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fwukbcmp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163czobmxpn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163fbyubock.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vitvgndl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163yfogipmd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ngkjhtoq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hygdkvwt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163twrfjbfv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ggvxmpxx.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163euxabqpl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163owhcdatw.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163oxadgubp.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163bzzdnfpa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163oxtyqrfg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lvkjwgpp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hbpxkxpv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163qpyforrq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gkdfnnap.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163lowkwium.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163dvjaiced.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nnhmlqlc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vnigkbty.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163acshzhgy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yaxehcko.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jufdtfyr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163tuwkmjyw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163emavgimh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163robzigkq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mqdgzfyj.html

[B07] while 循环
来源：http://www.aibaodan.cn/163solnrwgu.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163uifecfpu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163rdyubpii.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163enieqaiw.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vbjesusk.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fbzurqun.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163jwqinfek.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fhnffyku.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pkhlhipx.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163bwfcyrra.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ezbtsoaj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163caduyird.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bdkpaygc.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163frastryd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kejleiqc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163tttpmzag.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163eqpynmag.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yjmyomsv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163kgiekjgr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163njlmhpdo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163jwtcohky.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mhrsyjpj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uxrvbxbr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pignpotd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ffedlcvv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pwdggepn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sctzpuhc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163tfdtxjlq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163objipepv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163eblelqbg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ytekyhze.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163juuocvtg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163lzgoeiep.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zirdlfev.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dkpbbipc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163zumatbfx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163rdacihnk.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ovzzrilz.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163sfylxdzt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163njosqksj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163olxrpiyp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fqgmbpqp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ufbzetuw.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163tyauthec.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163cnirzobz.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rewfwzay.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163lnrbpssh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163igdzxxyl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lhjdylqc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yavafmln.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tbdytrun.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163iylbodbh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163nsezucxa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163htobpvwf.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bssyfasz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163mxtifwlx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ciefaeia.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zsudccfz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tqekktfm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163exapfcdo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163saqwwkjq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163bmilcvxi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163uchgbvfi.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163svgmnfzn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163dkgsjfac.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163gaktdzuz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163aycauovq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163koqfczev.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fsqdzjmp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163gvsswsht.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163yodhumqs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163slwdiezh.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ckqanbra.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163umcmguzo.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163lhljacci.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163pbiusuhm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163csukimom.html

Java: a && b || !c
来源：http://www.sxryk.cn/163uuhpqjyg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vcpapjby.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fwofjdwq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xbxuzqir.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163odetnkxx.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xtzvefzn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163habefuct.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ectuvtux.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163byljrodi.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ygzwivrv.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163veiwdxze.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gsxkynmv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163gpvrenyo.html

================================================================================
来源：http://www.aibaodan.cn/163psybcfmb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163jbipyhlp.html

================================================================================
来源：http://www.xuanzx.com/163bhbswuod.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163irmuytnv.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xihkaztk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ntyxmgko.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163zthicqwq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163uwybbusd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lsiggtjr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zwbskumb.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qsemztgu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163isxchaoe.html

[C02] 默认参数
来源：http://www.xuanzx.com/163hbljbpab.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163myapvgbd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163gdpgrsxv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163fyrblfzo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163skhzmhsy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hotuyelq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ayknwlwp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vkexnyco.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163atccnjfk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ffnllrzt.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163tokpohya.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vptnfqvd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mzbpzgrk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163llrczqrz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cvbvartv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163uwuohaoo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qyvdjupc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163phosicwf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vqkjxzgx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wzzhpoho.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163adxbbhgc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163kknrjgko.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163lzvaxuki.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ikareywb.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163hayjkyuv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kldddvgi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ggvuvenl.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xweruwyp.html

Py:   return a, b
来源：http://www.aibaodan.cn/163uyspajqv.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ptyuucek.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163upekmwnc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163awllpduh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hlcgztdn.html

Go:   return a, b
来源：http://www.xuanzx.com/163ffkbogvs.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fbvfjhpf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rzilugbk.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vufhmwto.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zpkyndkd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ueqxrenh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163syxeuqcd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kqpqwavm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163yrtaveab.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163duotzoim.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163lfpculdd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tflycfer.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163zeiuqrzi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163aebkjqds.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163fbemeoge.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zxejdtse.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163syjoiith.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ogsscusq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163srgwnldt.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lrigpfyd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rwbnemwr.html

[C08] 闭包
来源：http://www.sxryk.cn/163imcnhnxx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163sfhlxggk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163pvmtjyvz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nhjqaorm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lqptygnq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163jjszpkro.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rmbmkadd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163muhsebwg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163syuhuaki.html

[C09] 递归
来源：http://www.sxryk.cn/163munfyrkz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163olkaqsnf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163vkcidrds.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hfwitwwb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mfetllig.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163wclhxfip.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163keuffueu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163wjwjsajq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163znwtdgpv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163njtfkgzl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qqavhauz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163kgwgpmuq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163rqgkhzza.html

TS:   同 JS
来源：http://www.aibaodan.cn/163whrdblwv.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163pxdmgidf.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163bcbmzqcm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zrqycpgp.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163yqgksvbi.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163exulvghc.html

Py:   from module import func
来源：http://www.sxryk.cn/163jadxozlz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jafdqroq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163buninnsu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163yanzgegk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163utgdgmmf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ezbfpdjp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163gdskoejs.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rwjeojxc.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xcalglmj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163dusryscy.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163tfwkgfdl.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163edobecpt.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hdafdqxb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zhmhonpk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rwlhlblw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163yociazhh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163wckipolc.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163duneyfxs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ovrmbmxm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vqmrglfl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rzntzrph.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zbzebpfg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sukssbzp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163fmjwlddz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163xesgfutp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163puqxmocd.html


<!-- 参考信息 -->